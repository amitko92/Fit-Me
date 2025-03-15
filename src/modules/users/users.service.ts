import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { SignUpDto } from "./dtos/sign-up.dto";
import { SignInDto } from "./dtos/sign-in.dto";
import { User } from "src/schemas/user.schema";
import * as moment from "moment"; 



@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    signUp(signUpDto: SignUpDto): Promise<User> {

        // 1. validate the user data.
        if(signUpDto.password !== signUpDto.confirmPassword) {
            throw new Error('passwords do not match');
        }

        // 2. check if the user already exists in the database.

        // 3. create the iniall data of the new user.
        const creationDate = moment().format('DD/MM/YYYY');

        // 4. save the new user in the database.
        const newUser = new this.userModel({
            ...signUpDto,
            creationDate
        });

        return newUser.save();
    }

    signIn(signIpDto: SignInDto): string {
        return 'sign-in';
    }
}
