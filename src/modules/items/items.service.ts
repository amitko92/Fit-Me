import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Item } from "src/schemas/item.schema";
import { AddOneDto } from "./dtos/add-one.dto";




@Injectable()
export class ItemsService {

    constructor(@InjectModel(Item.name) private userModel: Model<Item>) {}

    addOne(userId: string, addOneDto: AddOneDto): string{

        return 'addOne';
    }

    getOne(): string{

        return 'getOne';
    }

    get(): string{

        return 'get';
    }
 
}
