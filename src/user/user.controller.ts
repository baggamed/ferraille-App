import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller('users')
export class UsersController {
    constructor (
        private readonly usersService : UsersService
    ){}
    @Get()
    async findAll(){
        return await this.usersService.findAll()
    }

    @Post()
    async create(@Body() body){
        return await this.usersService.create(body)
    }
   
    

}