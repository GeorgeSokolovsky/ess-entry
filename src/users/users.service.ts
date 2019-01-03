import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Optional } from '../common/types';
import { RegisterUserDto } from './dto';
import { User } from '../common/schema/graphql.schema';

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
}
