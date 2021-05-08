import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CarsService } from "./cars.service";

@Controller('cars')
export class CarsController {
    constructor (
        private readonly carsService :CarsService
    ){}
    @Get()
    async findAll(){
        return await this.carsService.find()
    }

    @Post()
    async create(@Body() body){
        return await this.carsService.create(body)
    }
    @Get(':nompiece')
    async getCarById(@Param('nompiece') nompiece: String) {
        const data=[];
        
        const cars= await this.carsService.find();
        //console.log(cars[4].pieces);
        
        for (let i=0;i<cars.length;i++){
            //console.log("bagga",cars[4].pieces);
            for (let j=0;j< cars[i].pieces.length;j++){
                
                if(cars[i].pieces[j].nom===nompiece){
                    data.push(cars[i].genrecar)
            
                    
                }
            }
            
        }
        return data
        
    }
    @Delete(':numcar')
    async deleteCarById(@Param('numcar') numcar: Number){
        this.carsService.deleteCarById(numcar);
    }
}