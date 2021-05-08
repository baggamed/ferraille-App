import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { piecesServiceInjector } from "common/config";
import { PiècesController } from "./pièce.controller";
import { PiècesSchema } from "./pièce.schema";
import {PiècesService} from "./pièce.service"; 

@Module({
    imports: [
        MongooseModule.forFeature([{name:piecesServiceInjector, schema :PiècesSchema}])
    ],
    exports: [PiècesService],
    controllers: [PiècesController],
    providers: [PiècesService],

})
export class PiècesModule {
}