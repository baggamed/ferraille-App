import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { MotosService } from "./motos.service";

@Controller('motos')
export class MotosController {
    constructor (
        private readonly motosService :MotosService
    ){}
    @Get()
    async findAll(){
        return await this.motosService.find()
    }

    @Post()
    async create(@Body() body){
        return await this.motosService.create(body)
    }
    @Delete(':nummoto')
    async deletemotoById(@Param('nummoto') nummoto:Number){
        this.motosService.deletemotoById(nummoto);
    }
    @Get(':nummoto')
    public getmotoById(@Param('nummoto') nummoto:Number){
        return this.motosService.getmotoById(nummoto);
    }
}