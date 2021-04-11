import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose" ;
import { Camion } from "./camions.interface" ;

@Injectable()
export class CamionsService{
    constructor(
        @InjectModel('Camions')
        private readonly camionsModel : Model<Camion>
    ){}

    async find():Promise<Camion[]>{
        return await this.camionsModel.find().exec()
    }

    async create (camionDto): Promise<Camion> {
        const camion= await this.camionsModel.create(camionDto)
        return camion;
    }
    public async deleteCamById(numcamion:Number){
        const camion = this.camionsModel.deleteOne({numcamion}).exec();
        if ((await camion).deletedCount===0){
            throw new HttpException('Not found',404);
        }
    }
    public async getCamById(numcamion:Number): Promise<any>{
        const camion= this.camionsModel.findOne({numcamion}).exec();
        if (!camion) {
                throw new HttpException('Not found',404);
            }
        return camion;
    }
}