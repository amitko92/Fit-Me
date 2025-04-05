import { Controller, Post, UseGuards, Request, Body, ValidationPipe } from "@nestjs/common";
import { AddOneResponse, ItemsService } from "./items.service";
import { AuthGuard } from "@nestjs/passport";
import { JwtPayload } from "../auth/interfaces/jwt-payload.interface";
import { AddOneDto } from "./dtos/add-one.dto";
import { AddOneError } from "./errors/add-one-error";
import { GetItemsDto } from "./dtos/get-items-dto";

@Controller('/api/items')
export class ItemController {

    constructor(private readonly itemService: ItemsService) { }


    @UseGuards(AuthGuard('jwt'))
    @Post('/add-one')
    async addOne(
        @Request() req,
        @Body(ValidationPipe) addOneDto: AddOneDto
    ): Promise<AddOneResponse> {

        try {
            

            const user: JwtPayload = req.user; // Access the user details from the request object
            const response = await this.itemService.addOne(user.id, addOneDto);
        
            return response;
        } catch (error) {

            if(error instanceof AddOneError) {

                console.log("################ " + error.message);
            }
            
            throw error;
        }
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('/get')
    get(
        @Request() req,
        @Body(ValidationPipe) getItemsDto: GetItemsDto
    ): string {

        return this.itemService.get();
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('/get-one')
    getOne(): string {

        return this.itemService.getOne();
    }
}