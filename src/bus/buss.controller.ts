import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { BussService}from "./buss.service";

@Controller('buss')
export class BussController {
    constructor (
        private readonly bussService :BussService
    ){}
    @Get()
    async findAll(){
        return await this.bussService.find()
    }

    @Post()
    async create(@Body() body){
        return await this.bussService.create(body)
    }
    @Delete(':numbus')
    async deleteBusById(@Param('numbus')numbus:Number){
        this.bussService.deleteBusById(numbus);
    }
    @Get(':numbus')
    public getBusById(@Param('numbus') numbus: Number) {
        return this.bussService.getBusById(numbus);
    }
    
}