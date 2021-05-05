import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { vehicleServieInjector } from "common/config";
import { Model } from "mongoose";
import { Vehicle } from "./vehicle.interface";


@Injectable()
export class VehicleService {
    constructor(
        @InjectModel(vehicleServieInjector)
        private readonly VehiclesModel: Model<Vehicle>
    ) { }
    async create(vehicleDto): Promise<Vehicle> {
        const vehicle = await this.VehiclesModel.create(vehicleDto)
        return vehicle;
    }
    async find():Promise<Vehicle[]>{
        return await this.VehiclesModel.find()
        .sort({marquecar : 1}).distinct('marquecar')
        .exec()
    }
    async findCustomCriteria(type):Promise<Vehicle[]>{
        return await this.VehiclesModel.find({type})
        .sort({marquecar : 1}).distinct('marquecar')
        .exec()
    }
    async findOne(criteria, select: any = {}): Promise<Vehicle> {

        return await this.VehiclesModel.findOne(criteria, select).exec();
    }
    async findAll(criteria = {}, select: any = {}): Promise<Vehicle[]> {
        return await this.VehiclesModel.find(criteria, select).exec();
    }
   /* async getModelByMarque(){
        const vehicles= this.VehiclesModel.findOne({marquecar}).exec();
        if (!vehicles) {
                throw new HttpException('Not found',404);
            }
        return vehicles;
    }*/
  

}