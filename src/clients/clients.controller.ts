import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { ClientsService } from "./clients.service";

@Controller('Clients')
export class ClientsController {
    constructor (
        private readonly clientsService :ClientsService
    ){}
    @Get()
    async findAll(){
        return await this.clientsService.find()
    }

    @Post()
    async create(@Body() body){
        return await this.clientsService.create(body)
    }
    

}