import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MotosController } from "./motos.controller";
import { MotoSchema } from "./motos.schema";
import { MotosService } from "./motos.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name:"Motos", schema :MotoSchema}])
    ],
    exports: [MotosService],
    controllers: [MotosController],
    providers: [MotosService]

})
export class MotosModule {
}