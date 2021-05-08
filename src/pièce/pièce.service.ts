import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pièce } from "./pièce.interface";

@Injectable()
export class PiècesService{
    constructor(
        @InjectModel('pieces')
        private readonly piècesModel : Model<Pièce>
    ){}
 
    public  async deletePièceByName(nompièce:String){
            const pièce= this.piècesModel.deleteOne({nompièce}).exec();
            if ((await pièce).deletedCount===0){
                throw new HttpException('Not found',404);
            }
            return pièce;
    }

    async find():Promise<Pièce[]>{
        return await this.piècesModel.find().exec()
    }
    async findAll(criteria = {}, select: any = {}): Promise<Pièce[]> {
    
        return await this.piècesModel.find(criteria, select).exec();
        
        }
    

    async create (pièceDto): Promise<Pièce> {
        const pièce= await this.piècesModel.create(pièceDto)
        return pièce;
    }
    public  getPièces() {
        const pièces = this.piècesModel.find().exec();
        if (!pièces || !pièces[0]){
            throw new HttpException('Not found',404);
        }
        return pièces;
    }
    
    

}