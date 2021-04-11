import { Module } from "@nestjs/common";
import { UsersModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import {JwtModule} from "@nestjs/jwt"
import { JWT_EXPIRES_TIME, JWT_SECRET_KEY } from "common/config";


@Module({
    imports: [
       UsersModule,
       JwtModule.register({
 
        secret: JWT_SECRET_KEY,
        
        signOptions: { expiresIn: JWT_EXPIRES_TIME },
        
        }),
    ],
    exports: [AuthService],
    controllers: [AuthController],
    providers: [AuthService],

})
export class AuthModule {
}