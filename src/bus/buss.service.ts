import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Bus } from "./buss.interface";

@Injectable()
export class BussService{
    constructor(
        @InjectModel('Buss')
        private readonly bussModel : Model<Bus>
    ){}

    async find():Promise<Bus[]>{
        return await this.bussModel.find().exec()
    }

    async create (busDto): Promise<Bus> {
        const bus= await this.bussModel.create(busDto)
        return bus;
    }
    public async deleteBusById(numbus:Number){
        const bus=this.bussModel.deleteOne({numbus}).exec();
        if ((await bus).deletedCount===0){
            throw   new HttpException('Not found',404);

        }
    }
    public async getBusById(numbus :Number): Promise<any>{
        const bus= this.bussModel.findOne({numbus}).exec();
        if (!bus) {
                throw new HttpException('Not found',404);
            }
        return bus;
    }
    
}