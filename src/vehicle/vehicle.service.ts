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
        console.log(vehicle);
        
        return vehicle;
    }
    async find(criteria, select: any = {}):Promise<Vehicle[]>{
        return await this.VehiclesModel.find(criteria, select).exec()
    
    }
   /* async findCustomCriteria(type):Promise<Vehicle[]>{
        return await this.VehiclesModel.find({type})
        .sort({marquecar : 1}).distinct('marquecar')
        .exec()
    }*/
    async findOne(criteria, select: any = {}): Promise<Vehicle> {

        return await this.VehiclesModel.findOne(criteria, select).exec();
    }
    async findAll(criteria = {}, select: any = {}): Promise<Vehicle[]> {
        return await this.VehiclesModel.find(criteria, select).exec();
    }
    public async getPièceByName(nompiece :String): Promise<any>{
        const pièce= this.VehiclesModel.findOne({nompiece}).exec();
        if (!pièce) {
                throw new HttpException('Not found',404);
            }
        return pièce;
    }
    async deleteVehicleById(id:Number){
        const vehicle= this.VehiclesModel.deleteOne({id}).exec();
        if ((await vehicle).deletedCount===0){
            throw new HttpException('Not found',404);
        }
        return vehicle;
}
    async update(id: string, updateVheicleDto: any): Promise<any> {
        return await this.VehiclesModel.findByIdAndUpdate(id, { $set: updateVheicleDto },
            { new: true },
            (error: any, model: any) => {
                if (error != null) { console.error('ModelsService', 'update', 'error', error); }
                else { console.info('ModelsService', 'update', 'model', model); }
            });
    }

  

}