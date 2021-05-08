import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";
import { UsersService } from "./user.service";
import * as bcrypt from "bcrypt";


@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService
    ) { }

    //change password
    @Post('/change-password/')
    //@UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    async changePassword(@Res() res, @Req() req, @Body() body): Promise<any> {
        
        const currentUser = await this.authService.getAuthUser(req);
        const compare = await bcrypt.compare(body.oldPassword, currentUser.password);
        if (!compare) {
            return res.status(
                HttpStatus.FORBIDDEN).json({
                    statusCode: HttpStatus.FORBIDDEN,
                    error: 'new and old password dont match!',
                });
        }
        const newPassword = await this.authService.hashPassword(body.newPassword);
        await this.usersService.update(currentUser.id, { password: newPassword });
        return res.status(HttpStatus.OK).json({
            statusCode: HttpStatus.OK,
            message: 'Password changed',
        });
    }
    @Get()
    async findAll() {
        return await this.usersService.findAll()
    }
    @Get("/criteria")
    async findAllByCriteria(@Query() query) {
        return await this.usersService.findAll(query)
    }
    @Post()
    async create(@Body() body) {
        return await this.usersService.create(body)
    }
}