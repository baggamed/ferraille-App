import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CamionsController } from "./camions.controller";
import { CamionSchema } from "./camions.schema";
import { CamionsService } from "./camions.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name:"Camions", schema :CamionSchema}])
    ],
    exports: [CamionsService],
    controllers: [CamionsController],
    providers: [CamionsService]

})
export class CamionsModule {
}