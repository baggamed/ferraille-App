import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
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
    @Get(':nompiece')
    async getPièceByName(@Param('nompiece') nompiece : String){
       //return await this.piècesService.getPièceByName(nompiece);
    }
     
    
    
    @Delete(':nompiece')
    public deletePièceByName(@Param('nompiece') nompiece: String){
        this.piècesService.deletePièceByName(nompiece);
    }
    /*
    @Put()
    async update(nompiece: string, updatePieceDto: any): Promise<any> {
        return await this.piècesModel.findByIdAndUpdate(nompiece, { $set: updatePieceDto },
            { new: true },
            (error: any, model: any) => {
                if (error != null) { console.error('ModelsService', 'update', 'error', error); }
                else { console.info('ModelsService', 'update', 'model', model); }
            });
    }*/
    

}