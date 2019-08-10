import { Injectable } from '@nestjs/common';
import { Optional, UserToken } from '../common/types';
import { User } from '../common/schema/graphql.schema';
import { RegisterUserDto, SignInUserDto } from './dto';
import { UsersRepository } from './users.repository';
import { INCORRECT_CREDENTIALS_ERROR, TOKEN_EXPIRED_ERROR } from './errors';
import { JwtService } from '@nestjs/jwt';
import { TokenExpiredError } from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(
    private readonly repository: UsersRepository,
    private readonly jwt: JwtService,
  ) {}

  async findUserById(id: string): Promise<Optional<User>> {
    return await this.repository.findOneById(id);
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    return await this.repository.create(registerUserDto);
  }

  async verifyToken(token: UserToken): Promise<Optional<User>> {
    try {
      const payload = this.jwt.verify(token);

      return await this.validateUser(payload);
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        throw TOKEN_EXPIRED_ERROR;
      }
    }
  }

  async signIn(signInUserDto: SignInUserDto): Promise<UserToken> {
    const user = await this.validateUser(signInUserDto);

    if (!user) {
      throw INCORRECT_CREDENTIALS_ERROR;
    }

    return this.jwt.sign(signInUserDto);
  }

  private async validateUser({
    login,
    password,
  }: SignInUserDto): Promise<Optional<User>> {
    const user = await this.repository.findUserWithPasswordByLogin(login);

    const isValid = !!user ? await user.comparePassword(password) : false;

    return isValid ? await this.repository.findOneByLogin(login) : await null;
  }
}
