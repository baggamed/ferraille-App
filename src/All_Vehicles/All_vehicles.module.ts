import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { All_vehicleServieInjector, vehicleServieInjector } from "common/config";
import { All_VehiclesController } from "./All_vehicles.controller";
import { All_VehicleSchema } from "./All_vehicles.schema";
import { All_VehicleService } from "./All_vehicles.service";


@Module({
    imports: [
        MongooseModule.forFeature([{name:All_vehicleServieInjector, schema :All_VehicleSchema}])
    ],
    exports: [All_VehicleService],
    controllers: [All_VehiclesController],
    providers: [All_VehicleService],

})
export class All_VehiclesModule {
}