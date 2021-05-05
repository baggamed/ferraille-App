import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
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
    @Get(':type')
    async getMarque(@Param('type') type: string) {
        const vehicle = await this.VehiclesService.findCustomCriteria(type);
        return vehicle
    }

    @Get(':marquecar')

    async getModelByMarque(@Param('marquecar') marquecar: string) {
        const Model = [];
        const vehicle = await this.VehiclesService.find();

        for (let k = 0; k < vehicle.length; k++) {
            if (vehicle[k].marquecar === marquecar) {
                Model.push(vehicle[k].modelcar);
            }
        }
        return Model
    }
}


