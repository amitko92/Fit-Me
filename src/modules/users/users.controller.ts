import { Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.service";



@Controller('/api/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }


    @Post('/sign-up')
    register(): string {

        return this.usersService.signUp();
    }

    @Post('/sign-in')
    signin(): string {

        return this.usersService.signIn();
    }
}