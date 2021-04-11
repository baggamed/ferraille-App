import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "./user.controller";
import { UsersService } from "./user.service";
import {UsersSchema} from "./user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name:"users", schema :UsersSchema}])
    ],
    exports: [UsersService],
    controllers: [UsersController],
    providers: [UsersService],

})
export class UsersModule {
}