// filepath: c:\Users\amitk\Documents\visual studio code\fit-me-backend\src\auth\auth.controller.ts
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from '../users/dtos/sign-in.dto';
import { SignUpDto } from '../users/dtos/sign-up.dto';
import { User } from 'src/schemas/user.schema';

@Controller('/api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }



    @Post('/sign-up')
    signUp(@Body(ValidationPipe) signUpDto: SignUpDto): Promise<User> {

        return this.authService.signUp(signUpDto);
    }


    @Post('/sign-in')
    async signIn(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
        return this.authService.signIn(signInDto);
    }


}