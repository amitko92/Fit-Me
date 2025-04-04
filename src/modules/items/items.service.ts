import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Item } from "src/schemas/item.schema";
import { AddOneDto } from "./dtos/add-one.dto";
import { AddOneError, AddOneErrorCode } from "./errors/add-one-error";
import { convertBase64ToImg } from "src/commens/imageBase64/convert-base-64-to-img";




@Injectable()
export class ItemsService {

    constructor(@InjectModel(Item.name) private userModel: Model<Item>) {}

    async addOne(userId: string, addOneDto: AddOneDto): Promise<string> {

        // TODO - Check if item is valid.

        const tags = addOneDto.tags;
        const imageBase64 = addOneDto.imageBase64;
        const itemType = addOneDto.itemType;
        const description = addOneDto.description;

        // TODO - Check if image is valid.
        // TODO - Check if tags are valid.
        // TODO - Check if item type is valid.

        if(imageBase64 === undefined || imageBase64 === null) {
            throw new AddOneError('image base64 is undefined or null', AddOneErrorCode.INVALID_IMAGE_BASE64);
        }

        await convertBase64ToImg(imageBase64, 'C:\\Users\\amitk\\Pictures\\fit-me');

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
