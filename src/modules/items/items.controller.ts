import { Controller, Post, UseGuards, Request, Body, ValidationPipe } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { AuthGuard } from "@nestjs/passport";
import { JwtPayload } from "../auth/interfaces/jwt-payload.interface";
import { AddOneDto } from "./dtos/add-one.dto";
import { AddOneError } from "./errors/add-one-error";

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

            if(error instanceof AddOneError) {

                console.log("################ " + error.message);
            }
            
            throw error;
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