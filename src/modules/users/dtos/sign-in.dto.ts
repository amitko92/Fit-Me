import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class SignInDto {

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(14)
    password: string;

}