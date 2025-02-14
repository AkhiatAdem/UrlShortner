import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto, registerDto } from './auth.dto';
@Controller('auth')
export class AuthController {

    constructor(private authservice: AuthService){}


    @Post('login')
    async login(@Body() dto:loginDto){

        return await this.authservice.login(dto);

    }

    @Post('register')
    async register(@Body() dto:registerDto){

        return await this.authservice.register(dto);

    }






}
