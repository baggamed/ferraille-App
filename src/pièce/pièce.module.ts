import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PiècesController } from "./pièce.controller";
import { PiècesSchema } from "./pièce.schema";
import {PiècesService} from "./pièce.service"; 

@Module({
    imports: [
        MongooseModule.forFeature([{name:"pieces", schema :PiècesSchema}])
    ],
    exports: [PiècesService],
    controllers: [PiècesController],
    providers: [PiècesService],

})
export class PiècesModule {
}