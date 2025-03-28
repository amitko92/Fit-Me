import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class AddOneDto {


    @IsString()
    @IsNotEmpty()
    imageUrl: string;

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