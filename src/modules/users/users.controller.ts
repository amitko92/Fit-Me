import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { SignUpDto } from "./dtos/sign-up.dto";
import { SignInDto } from "./dtos/sign-in.dto";
import { User } from "src/schemas/user.schema";



@Controller('/api/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }


    @Post('/sign-up')
    signUp(@Body(ValidationPipe) signUpDto: SignUpDto): Promise<User> {

        return this.usersService.signUp(signUpDto);
    }

    @Post('/sign-in')
    signin(@Body(ValidationPipe) signIpDto: SignInDto): string {

        return this.usersService.signIn(signIpDto);
    }
}