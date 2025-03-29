import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Item } from "src/schemas/item.schema";
import { AddOneDto } from "./dtos/add-one.dto";
import { AddOneError, AddOneErrorCode } from "./errors/add-one-error";




@Injectable()
export class ItemsService {

    constructor(@InjectModel(Item.name) private userModel: Model<Item>) {}

    addOne(userId: string, addOneDto: AddOneDto): string {

        if(userId !== 'aas') {

            throw new AddOneError('user not authorized', AddOneErrorCode.INVALID_ITEM_TYPE);
        }

        return 'addOne';
    }

    getOne(): string{

        return 'getOne';
    }

    get(): string{

        return 'get';
    }
 
}
