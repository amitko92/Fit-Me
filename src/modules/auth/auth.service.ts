// filepath: c:\Users\amitk\Documents\visual studio code\fit-me-backend\src\auth\auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInDto } from '../users/dtos/sign-in.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    
    const user = await this.usersService.validateUser(signInDto);
    const payload: JwtPayload = { 
        firstName: user.firstName, 
        lastName: user.lastName,
        birthDate: user.birthDate,
        creationDate: user.creationDate,
        email: user.email 
    };

    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}