import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWT_SECRET_KEY } from 'common/config';
 

 
import { ExtractJwt, Strategy } from 'passport-jwt';
 
import { PassportStrategy } from '@nestjs/passport';
 
import { AuthService } from './../auth.service';
 
import { IJwtPayload } from './../dto/jwt-payload.interface';
 
 
@Injectable()
 
export class JwtStrategy extends PassportStrategy(Strategy) {
 
 constructor(private readonly authService: AuthService) {
 
 super({
 
 jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
 
 secretOrKey: JWT_SECRET_KEY,
 
 });
 
 }
 
 
 async validate(payload: IJwtPayload) {
 
 const user = await this.authService.validateUser(payload);
 
 if (!user) {
 
 throw new UnauthorizedException();
 
 }
 
 return user;
 
 }
 
}