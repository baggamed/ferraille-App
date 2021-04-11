import { Injectable } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Command } from "./commands.interface";

@Injectable()
export class CommandsService{
    constructor(
        @InjectModel('Commands')
        private readonly commandsModel : Model<Command>
    ){}

    async find():Promise<Command[]>{
        return await this.commandsModel.find().exec()
    }

    async create (commandDto): Promise<Command> {
        const command= await this.commandsModel.create(commandDto)
        return command;
    }
}