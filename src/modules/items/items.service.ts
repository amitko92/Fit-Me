import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Item } from "src/schemas/item.schema";




@Injectable()
export class ItemsService {

    constructor(@InjectModel(Item.name) private userModel: Model<Item>) {}

    addOne(): string{

        return 'addOne';
    }

    getOne(): string{

        return 'getOne';
    }

    get(): string{

        return 'get';
    }
 
}
