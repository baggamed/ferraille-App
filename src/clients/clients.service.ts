import { Injectable } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Client } from "./clients.interface";

@Injectable()
export class ClientsService{
    constructor(
        @InjectModel('Clients')
        private readonly clientsModel : Model<Client>
    ){}

    async find():Promise<Client[]>{
        return await this.clientsModel.find().exec()
    }

    async create (clientDto): Promise<Client> {
        const client= await this.clientsModel.create(clientDto)
        return client;
    }
}