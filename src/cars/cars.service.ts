import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Car } from "./cars.interface";

@Injectable()
export class CarsService{
    constructor(
        @InjectModel('Cars')
        private readonly carsModel : Model<Car>
    ){}

    async find():Promise<Car[]>{
        return await this.carsModel.find().exec()
    }

    async create (carDto): Promise<Car> {
        const car= await this.carsModel.create(carDto)
        return car;
    }
    public  getCars() {
        const cars = this.carsModel.find().exec();
        if (!cars || !cars[0]){
            throw new HttpException('Not found',404);
        }
        return cars;
    }
    public async getCarById(numcar :Number): Promise<any>{
        const car= this.carsModel.findOne({numcar}).exec();
        if (!car) {
                throw new HttpException('Not found',404);
            }
        return car;
    }
    public  async deleteCarById(numcar:Number){
            const car= this.carsModel.deleteOne({numcar}).exec();
            if ((await car).deletedCount===0){
                throw new HttpException('Not found',404);
            }
            return car;
    }

}