import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CommandsController } from "./commands.controller";
import { CommandsSchema } from "./commands.schema";
import { CommandsService } from "./commands.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name:"Commands", schema :CommandsSchema}])
    ],
    exports: [CommandsService],
    controllers: [CommandsController],
    providers: [CommandsService]

})
export class CommandsModule {
}