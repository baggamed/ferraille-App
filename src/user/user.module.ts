import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "./user.controller";
import { UsersService } from "./user.service";
import {UsersSchema} from "./user.schema";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [
        MongooseModule.forFeature([{name:"users", schema :UsersSchema}]),
        forwardRef(() => AuthModule),
    ],
    exports: [UsersService],
    controllers: [UsersController],
    providers: [UsersService],

})
export class UsersModule {
}