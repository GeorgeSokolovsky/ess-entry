import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Optional, UserToken } from '../types';
import { User } from '../schema/graphql.schema';
import { RegisterUserDto, SignInUserDto } from '../../users/dto';

@Injectable()
export class UsersService {
  @Client({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 9001,
    },
  })
  private readonly client: ClientProxy;

  async findUserById(id: string): Promise<Optional<User>> {
    return await this.client.send({ cmd: 'info' }, id).toPromise();
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    return await this.client
      .send({ cmd: 'register' }, registerUserDto)
      .toPromise();
  }

  async verifyToken(token: UserToken): Promise<User> {
    return await this.client.send({ cmd: 'verify' }, token).toPromise();
  }

  async signIn(signInUserDto: SignInUserDto): Promise<UserToken> {
    return await this.client.send({ cmd: 'token' }, signInUserDto).toPromise();
  }
}
