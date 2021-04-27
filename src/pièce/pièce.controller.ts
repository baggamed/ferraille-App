import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PiècesService } from "./pièce.service";

@Controller('pieces')
export class PiècesController {
    constructor (
        private readonly piècesService : PiècesService
    ){}
    @Get()
    async findAll(){
        return await this.piècesService.findAll()
    }

    @Post()
    async create(@Body() body){
        return await this.piècesService.create(body)
    }
    
    
    @Delete(':nompiece')
    public deletePièceByName(@Param('nompiece') nompiece: String){
        this.piècesService.deletePièceByName(nompiece);
    }
    

}