import { Module } from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ClientSchema}from "./clients.schema";
import { ClientsController } from"./clients.controller";
import {ClientsService} from "./clients.service";

@Module ({
    imports:[
        MongooseModule.forFeature([{name:'Clients', schema: ClientSchema }])
   ], 
    exports:[ClientsService],
    controllers: [ClientsController],
    providers: [ClientsService],
})
export class ClientsModule {
}