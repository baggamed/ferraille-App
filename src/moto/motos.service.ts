import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Moto } from "./motos.interface";

@Injectable()
export class MotosService{
    constructor(
        @InjectModel('Motos')
        private readonly motosModel : Model<Moto>
    ){}

    async find():Promise<Moto[]>{
        return await this.motosModel.find().exec()
    }

    async create (motoDto): Promise<Moto> {
        const moto= await this.motosModel.create(motoDto)
        return moto;
    }
    public async deletemotoById(nummoto:Number){
        const moto = this.motosModel.deleteOne({nummoto}).exec();
        if ((await moto).deletedCount===0){
            throw new HttpException('Not found',404);
        }
    }
    public async getmotoById(nummoto:Number){
        const moto= this.motosModel.findOne({nummoto}).exec();
        if (!moto) {
                throw new HttpException('Not found',404);
            }
        return moto;


    }
}