import { Injectable } from "@nestjs/common";



@Injectable()
export class UsersService {



    signUp(): string {
        return 'sign-up';
    }

    signIn(): string {
        return 'sign-in';
    }
}
