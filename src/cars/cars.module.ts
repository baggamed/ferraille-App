import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CarsController } from "./cars.controller";
import { CarSchema } from "./cars.schema";
import { CarsService } from "./cars.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name:"Cars", schema :CarSchema}])
    ],
    exports: [CarsService],
    controllers: [CarsController],
    providers: [CarsService],

})
export class CarsModule {
}