import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BussController } from "./buss.controller";
import { BusSchema } from "./buss.schema";
import { BussService } from "./buss.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name:"Buss", schema :BusSchema}])
    ],
    exports: [BussService],
    controllers: [BussController],
    providers: [BussService]

})
export class BussModule {
}