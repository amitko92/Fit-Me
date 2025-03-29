import { Controller, Post, UseGuards, Request, Body, ValidationPipe } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { AuthGuard } from "@nestjs/passport";
import { JwtPayload } from "../auth/interfaces/jwt-payload.interface";
import { AddOneDto } from "./dtos/add-one.dto";

@Controller('/api/items')
export class ItemController {

    constructor(private readonly itemService: ItemsService) { }


    @UseGuards(AuthGuard('jwt'))
    @Post('/add-one')
    addOne(
        @Request() req,
        @Body(ValidationPipe) addOneDto: AddOneDto
    ): string {

        try {
            
            const user: JwtPayload = req.user; // Access the user details from the request object
            const response = this.itemService.addOne(user.id, addOneDto);
        
        } catch (error) {
            
            console.log("");
        }
        
        return "";
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