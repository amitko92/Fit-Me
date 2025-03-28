import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInDto } from '../users/dtos/sign-in.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as moment from 'moment';
import { SignUpDto } from '../users/dtos/sign-up.dto';
import { User } from 'src/schemas/user.schema';
import { User as UserEntity } from '../../entities/user';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {

    const user = await this.usersService.validateUser(signInDto);
    
    const payload: JwtPayload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      birthDate: user.birthDate,
      creationDate: user.creationDate,
      email: user.email,
    };

    const accessToken = this.jwtService.sign(payload);
    
    return { accessToken };
  }

  async signUp(signUpDto: SignUpDto): Promise<User> {

    // 1. validate the user data.
    if (signUpDto.password !== signUpDto.confirmPassword) {
      throw new ConflictException('passwords do not match');
    }

    // 2. check if the user(email) already exists in the database.
    const existsUser = await this.usersService.findOneByEmail(signUpDto.email);

    if (existsUser) {
      throw new ConflictException('user already exists');
    }

    // 3. create the iniall data of the new user.
    const creationDate = moment().format('DD/MM/YYYY');

    // 4. save the new user in the database.
    const userEntity = new UserEntity(
      signUpDto.firstName,
      signUpDto.lastName,
      signUpDto.email,
      signUpDto.password,
      creationDate,
      signUpDto.birthDate,
      signUpDto.gender,
      '-1'
    );
    
    // saveUser
    return await this.usersService.saveUser(userEntity);
  }
}