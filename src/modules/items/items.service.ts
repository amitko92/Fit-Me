import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Item } from "src/schemas/item.schema";
import { AddOneDto } from "./dtos/add-one.dto";
import { AddOneError, AddOneErrorCode } from "./errors/add-one-error";
import { convertBase64ToImg } from "src/commens/imageBase64/convert-base-64-to-img";
import { ItemTypes } from "src/commens/enums/item-types.enum";
import { FileStorageManager } from "src/commens/file-storage/file-storage-manager";
import { ItemEntity } from "src/entities/item";


export type AddOneResponse = {
    id: string,
    itemName: string,
    itemDescription: string,
    itemImageName: string,
}


@Injectable()
export class ItemsService {

    constructor(@InjectModel(Item.name) private itemModel: Model<Item>) { }

    async addOne(userId: string, addOneDto: AddOneDto): Promise<AddOneResponse> {
        const fileStorageManager = new FileStorageManager();
        // TODO - Check if item is valid.

        const tags = addOneDto.tags;
        const imageBase64 = addOneDto.imageBase64;
        const itemType = addOneDto.itemType;
        const description = addOneDto.description;
        const name = imageBase64.name;
        
        // TODO - Check if item type is valid.
        const isItemTypeValid = this.validateItemType(itemType);

        if (!isItemTypeValid) {
            throw new AddOneError('item type is invalid', AddOneErrorCode.INVALID_ITEM_TYPE);
        }

        // TODO - Check if name is valid.
        const isItemNameValid = this.validateItemName(name);

        if (!isItemNameValid) {
            throw new AddOneError('item name is invalid', AddOneErrorCode.INVALID_ITEM_TYPE);
        }

        // TODO - Check if image is valid.
        if (imageBase64 === undefined || imageBase64 === null) {
            throw new AddOneError('image base64 is undefined or null', AddOneErrorCode.INVALID_IMAGE_BASE64);
        }

        if (
            imageBase64 === undefined ||
            imageBase64 === null ||
            imageBase64.content === undefined ||
            imageBase64.content === null ||
            imageBase64.content === ''
        ) {
            throw new AddOneError('image base64 content is undefined or null', AddOneErrorCode.INVALID_IMAGE_BASE64);
        }

        const buffer = await convertBase64ToImg(imageBase64);

        const fileName = await fileStorageManager.uploadFile(buffer, userId);

        // result._id.toString()
        const itemEntity = new ItemEntity(
            '-1',
            fileName,
            name,
            userId,
            tags,
            itemType,
            new Date().toISOString(),
            description,
        )

        const item = new this.itemModel(itemEntity);
        const result = await item.save();

        return {
            id: result._id.toString(),
            itemName: name,
            itemDescription: description,
            itemImageName: fileName,
        };
    }




    getOne(): string {

        return 'getOne';
    }

    get(): string {

        return 'get';
    }


    // **** Halp Methods ****
    validateItemType(itemType: string): boolean {

        if (itemType === undefined || itemType === null || itemType === '') {
            return false;
        }

        return Object.values(ItemTypes).includes(itemType as ItemTypes);
    }

    validateItemName(itemName: string): boolean {

        if (itemName === undefined || itemName === null || itemName === '') {
            return false;
        }

        return true;
    }

}
