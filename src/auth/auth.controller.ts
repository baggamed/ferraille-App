import { Body, Controller, HttpStatus, Post, Res, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/user/user.service";
import { AuthService } from "./auth.service";
import * as bcrypt from "bcrypt";

@Controller('auth')
export class AuthController {
    constructor(private readonly authservice: AuthService,
        private readonly userservice: UsersService) { }

    @Post('login')
    async login(@Res() res, @Body() body) {


        const email = body.email ? body.email.toLowerCase().trim() : null;

        const username = body.username ? body.username.toLowerCase().trim() : null;

        const password = body.password;

        const criteria = body.email ? { email } : { username };


        const user = await this.userservice.findOne(criteria);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials.');

        } else {

            const userPassword = user.password;

            const passwordMatch = await bcrypt.compare(password, userPassword);

            if (passwordMatch) {

                const tokenData = {

                    id: user._id,

                    email: user.email

                }

                const accesstoken = await this.authservice.createToken(tokenData);


                return res.status(HttpStatus.OK).json({

                    statusCode: HttpStatus.OK,

                    data: {

                        user,
                        accesstoken,

                    },

                });

            } else {

                return res.status(HttpStatus.UNAUTHORIZED).json({

                    statusCode: HttpStatus.UNAUTHORIZED,

                    message: 'Invalid credentials.',

                });

            }

        }

    }

    @Post("register")
    async register(@Res() res, @Body() body) {

        body.username = body.username.toLowerCase().trim();

        body.email = body.email.toLowerCase().trim();


        const user = body;


        if (!body.email || !body.password) {

            return res.status(HttpStatus.BAD_REQUEST).json({

                statusCode: HttpStatus.BAD_REQUEST,

                error: 'Email and password are required.',

            });

        }


        // To check if there is an existant user whith the same email/username.

        const userByEmail = await this.userservice.findOne({ email: body.email });


        if (userByEmail) {

            return res.status(HttpStatus.CONFLICT).json({

                statusCode: HttpStatus.CONFLICT,

                cause: 'EMAIL',

                error: 'Email exist.',

            });

        }

        const userByUsername = await this.userservice.findOne({ username: body.username });

        if (userByUsername) {

            return res.status(HttpStatus.CONFLICT).json({

                statusCode: HttpStatus.CONFLICT,

                cause: 'USERNAME',

                error: 'Username exist.',

            });

        }


        const hashedPassword = await this.authservice.hashPassword(body.password);

        user.password = hashedPassword;





        const userData = {

            email: user.email,

            username: user.username,

            password: user.password,

            nomprenom: user.firstname,

            adresse: user.adresse,

            phonenumber: user.phonenumber,

            photo: user.photo,


        }
        console.log(userData);


        const createdUser = await this.userservice.create(userData);



        return res.status(HttpStatus.CREATED).json({

            statusCode: HttpStatus.CREATED,

            data: {

                id: createdUser.id,

                email: createdUser.email,

            },

        });

    }




}