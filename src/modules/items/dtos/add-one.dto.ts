import { IsArray, IsNotEmpty, IsObject, IsString } from "class-validator";
import { ImageBase64 } from "src/entities/ImageBase64";

export class AddOneDto {


    @IsObject()
    @IsNotEmpty()
    imageBase64: ImageBase64;

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    tags: string[];

    @IsArray()
    @IsNotEmpty()
    itemTypeId: string[];

    @IsString()
    @IsNotEmpty()
    creationDate: string;


}