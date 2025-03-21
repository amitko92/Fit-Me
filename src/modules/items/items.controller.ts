import { Controller, Post, UseGuards, Request } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { AuthGuard } from "@nestjs/passport";
import { JwtPayload } from "../auth/interfaces/jwt-payload.interface";

@Controller('/api/items')
export class ItemController {

    constructor(private readonly itemService: ItemsService) { }


    @UseGuards(AuthGuard('jwt'))
    @Post('/add-one')
    addOne(@Request() req): string {

        const user: JwtPayload = req.user; // Access the user details from the request object
        

        return this.itemService.addOne() + " " + user.id;
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('/get')
    get(): string {

        return this.itemService.get();
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('/get-one')
    getOne(): string {

        return this.itemService.getOne();
    }
}