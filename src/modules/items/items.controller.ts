import { Controller, Post, UseGuards } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { AuthGuard } from "@nestjs/passport";


@Controller('/api/items')
export class ItemController {

    constructor(private readonly itemService: ItemsService) { }


    @UseGuards(AuthGuard('jwt'))
    @Post('/add-one')
    addOne(): string {

        return this.itemService.addOne();
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