import { Injectable } from "@nestjs/common";
import { SignUpDto } from "./dtos/sign-up.dto";
import { SignInDto } from "./dtos/sign-in.dto";



@Injectable()
export class UsersService {



    signUp(signUpDto: SignUpDto): string {

        return 'sign-up: ' + signUpDto.firstName;
    }

    signIn(signIpDto: SignInDto): string {
        return 'sign-in';
    }
}
