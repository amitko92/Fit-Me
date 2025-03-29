import { IsArray, IsEnum, IsNotEmpty, IsObject, IsString } from "class-validator";
import { ItemTypes } from "src/commens/enums/item-types.enum";
import { ImageBase64 } from "src/entities/ImageBase64";

export class AddOneDto {


    @IsObject()
    @IsNotEmpty()
    imageBase64: ImageBase64;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsArray()
    tags: string[];

    @IsEnum(ItemTypes)
    @IsString()
    @IsNotEmpty()
    itemType: ItemTypes;

}