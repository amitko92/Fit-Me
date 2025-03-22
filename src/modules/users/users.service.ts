import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { SignInDto } from "./dtos/sign-in.dto";
import { User } from "src/schemas/user.schema";
import {User as UserEntity} from '../../entities/user';



@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}


    async saveUser(user: UserEntity): Promise<User> {
        
        try {

            const newUser = new this.userModel(user);
    
            return await newUser.save();
        } catch (error) {

            console.log(error);
            throw error;
        }
    }

    async findOneByEmail(email: string): Promise<User | null> {
        
        const existsUser = await this.userModel.findOne({email: email});

        if(!existsUser) {
            return null;
        }

        return existsUser;
    }

    /**
     * retur the user if the user exists in the 
     * database or throw UnauthorizedException.
     * @param signInDto 
     * @returns User
     * @throws UnauthorizedException if the user does not exist.
     */
    async validateUser(signInDto: SignInDto): Promise<UserEntity> {

        // TODO - Implement bcrypt
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

        const userEntity = new UserEntity(
            existsUser.firstName, 
            existsUser.lastName, 
            existsUser.email, 
            existsUser.password, 
            existsUser.creationDate, 
            existsUser.birthDate,
            existsUser.gender,
            existsUser._id.toHexString()
        );

        return userEntity;
    }
}
