import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { get } from "mongoose";
import { Pièce } from "src/pièce/pièce.interface";
import { All_VehicleService } from "./All_vehicles.service";


@Controller('All_vehicles')
export class All_VehiclesController {
    constructor(
        private readonly All_VehiclesService: All_VehicleService
    ) { }

    @Post()
    async create(@Body() body) {
        return await this.All_VehiclesService.create(body)
    }

    @Get("/criteria")
    async findAllByCriteria(@Query() query) {
        return await this.All_VehiclesService.findAll(query)
    }
    @Get()
    async findAll() {
        return await this.All_VehiclesService.findAll()
    }

    @Get(':type')
    async getMarque(@Param('type') type: string) {
        const vehicle = await this.All_VehiclesService.findCustomCriteria(type);
        return vehicle
    }

     @Get(':type/:marquecar')
    async getModelByMarque(@Param('marquecar') marquecar: string) {        
         const Model = [];
         const vehicle = await this.All_VehiclesService.find({});
         for (let k = 0; k < vehicle.length; k++) {
           if (vehicle[k].marquecar === marquecar) {             
                 Model.push(vehicle[k].modelcar);
             }
         }
        return Model    }
}