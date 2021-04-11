import { Injectable, Req } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

import { ExtractJwt } from 'passport-jwt';
import { UsersService } from 'src/user/user.service';
import { JWT_EXPIRES_TIME , SALT_ROUNDS , RESET_PWD_JWT_EXPIRES_TIME} from 'common/config';
import { IJwtPayload } from './dto/jwt-payload.interface';




@Injectable()

export class AuthService {


    constructor(

        private readonly usersService: UsersService,

        private readonly jwtService: JwtService,

    ) { }


    /**
    
    * Find and validate user existance
    
    * @param payload 
    
    */

    async validateUser(payload: IJwtPayload) {

        return await this.usersService.findOne({ _id: payload.id });

    }


    /**
    
    * Create Access Token
    
    * @param tokenData Token payload data
    
    */

    async createToken(tokenData: IJwtPayload) {

        const user: IJwtPayload = tokenData;

        const accessToken = this.jwtService.sign(

            user,

            {

                expiresIn: JWT_EXPIRES_TIME,

            });

        return accessToken;

    }



    /**
    
    * Crypt the password
    
    * @param password
    
    */

    async hashPassword(password: string | undefined): Promise<string> {

        return await bcrypt.hash(password, SALT_ROUNDS);

    }


    /**
    
    * Get the authenticated user with the token given in header
    
    * @param req
    
    */

    async getAuthUser(@Req() req) {

        const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()(req);

        const payload: any = this.jwtService.decode(jwtFromRequest, {});

        if (!payload) {

            return null;

        }

        return await this.usersService.findOne({ _id: payload.id });

    }



    async createResetPasswordToken(email) {

        const user: IJwtPayload = { email };

        const resetPasswordToken = this.jwtService.sign(user, {

            expiresIn: RESET_PWD_JWT_EXPIRES_TIME,

        });

        return resetPasswordToken;

    }
    
    


}