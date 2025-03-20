import { Controller, Post, UseGuards } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { AuthGuard } from "@nestjs/passport";


@Controller('/api/items')
export class ItemController {

    constructor(private readonly itemService: ItemsService) { }


    @UseGuards(AuthGuard('jwt'))
    @Post('/protected')
    protectedRoute(): string {
        return 'This is a protected route';
    }
}