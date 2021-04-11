import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CamionsService } from "./camions.service";


@Controller('camions')
export class CamionsController {
    constructor (
        private readonly camionsService :CamionsService
    ){}
    @Get()
    async findAll(){
        return await this.camionsService.find()
    }

    @Post()
    async create(@Body() body){
        return await this.camionsService.create(body)
    }
    @Delete(':numcamion')
    async deleteCamById(@Param('numcamion') numcamion:Number){
        this.camionsService.deleteCamById(numcamion);
    }
    @Get(':numcamion')
    public getCamionById(@Param('numcamion') numcamion:Number){
        return this.camionsService.getCamById(numcamion);
    }
}