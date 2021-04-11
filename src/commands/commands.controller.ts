import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CommandsService} from "./commands.service" ;

@Controller('commands')
export class CommandsController {
    constructor (
        private readonly commandsService :CommandsService
    ){}
    @Get()
    async findAll(){
        return await this.commandsService.find()
    }

    @Post()
    async create(@Body() body){
        return await this.commandsService.create(body)
    }
} 