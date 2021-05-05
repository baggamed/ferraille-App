import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { vehicleServieInjector } from "common/config";
import { VehiclesController } from "./vehicle.controller";
import { VehicleSchema } from "./vehicle.schema";
import { VehicleService } from "./vehicle.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name:vehicleServieInjector, schema :VehicleSchema}])
    ],
    exports: [VehicleService],
    controllers: [VehiclesController],
    providers: [VehicleService],

})
export class VehiclesModule {
}