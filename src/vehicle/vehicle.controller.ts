import { Body, Controller, Delete, Get, Param, Post, Put, Query, } from "@nestjs/common";
import { get } from "mongoose";
import { Pièce } from "src/pièce/pièce.interface";
import { VehicleService } from "./vehicle.service";

@Controller('vehicles')
export class VehiclesController {
    constructor(
        private readonly VehiclesService: VehicleService
    ) { }

    @Post()
    async create(@Body() body) {
        return await this.VehiclesService.create(body)
    }

    @Get("/criteria")
    async findAllByCriteria(@Query() query) {
        return await this.VehiclesService.findAll(query)
    }
    @Get()
    async findAll() {
        return await this.VehiclesService.findAll()
    }

    @Get('/:marquecar/:nompiece')
    async getPiecesbyName(@Param('marquecar') marquecar: string,@Param('nompiece') nompiece: string) {
        let data = []
        const vehicle = await this.VehiclesService.find({marquecar});
        for (let i = 0; i < vehicle.length; i++) {
            for (let j=0;j<vehicle[i].blocks.length;j++){

            if (vehicle[i].blocks[j].nom === nompiece) {

                data.push(vehicle[i])
            }
        }
        }
        return data
    }
    @Delete(':id')
    async deleteCarById(@Param('id') id: Number){
        this.VehiclesService.deleteVehicleById(id);
    }
//
//    @Put('id/:criteria')
//     async update(@Param('id')id : Number,@Query() query){
//         const 
//     }






}


