import { Body, Controller, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "@nestjs/passport";



@Controller('/api/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }


    @UseGuards(AuthGuard('jwt'))
    @Post('/protected')
    protectedRoute(): string {
        return 'This is a protected route';
    }
}