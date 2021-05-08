import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { All_vehicleServieInjector} from "common/config";
import { Model } from "mongoose";
import { All_Vehicle } from "./All_vehicles.interface";


@Injectable()
export class All_VehicleService {
    constructor(
        @InjectModel(All_vehicleServieInjector)
        private readonly All_VehiclesModel: Model<All_Vehicle>
    ) { }
    async create(All_vehicleDto): Promise<All_Vehicle> {
        const All_vehicle = await this.All_VehiclesModel.create(All_vehicleDto)
        
        
        return All_vehicle;
    }
    async find(criteria, select: any = {}):Promise<All_Vehicle[]>{
        return await this.All_VehiclesModel.find(criteria, select).exec()
    
    }
    async findCustomCriteria(type):Promise<All_Vehicle[]>{
        return await this.All_VehiclesModel.find({type})
        .sort({marquecar : 1}).distinct('marquecar')
        .exec()
    }
    async findOne(criteria, select: any = {}): Promise<All_Vehicle> {

        return await this.All_VehiclesModel.findOne(criteria, select).exec();
    }
    async findAll(criteria = {}, select: any = {}): Promise<All_Vehicle[]> {
        return await this.All_VehiclesModel.find(criteria, select).exec();
    }
  

  

}