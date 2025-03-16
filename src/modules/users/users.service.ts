import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { SignUpDto } from "./dtos/sign-up.dto";
import { SignInDto } from "./dtos/sign-in.dto";
import { User } from "src/schemas/user.schema";
import * as moment from "moment"; 



@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async signUp(signUpDto: SignUpDto): Promise<User> {

        // 1. validate the user data.
        if(signUpDto.password !== signUpDto.confirmPassword) {
            throw new Error('passwords do not match');
        }

        // 2. check if the user(email) already exists in the database.
        const existsUser = await this.findOneByEmail(signUpDto.email);
        
        if(existsUser) {
            throw new Error('user already exists');
        }
        
        // 3. create the iniall data of the new user.
        const creationDate = moment().format('DD/MM/YYYY');

        // 4. save the new user in the database.
        const newUser = new this.userModel({
            ...signUpDto,
            creationDate
        });

        return await newUser.save();
    }

    signIn(signIpDto: SignInDto): string {
        return 'sign-in';
    }

    async findOneByEmail(email: string): Promise<User | null> {
        
        const existsUser = await this.userModel.findOne({email: email});

        if(!existsUser) {
            return null;
        }

        return existsUser;
    }

    async validateUser(signInDto: SignInDto): Promise<User> {
/*
        const user = await this.findOneByEmail(signInDto.email);
        if (user && await bcrypt.compare(signInDto.password, user.password)) {
            return user;
        }
*/

        const existsUser = await this.userModel.findOne({email: signInDto.email, password: signInDto.password});

        if(!existsUser) {
            throw new UnauthorizedException();
        }

        return existsUser;
    }
}
