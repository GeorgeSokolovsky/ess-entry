import { Injectable } from '@nestjs/common';
import { Client, ClientProxy } from '@nestjs/microservices';
import { Field } from '@common/schema/graphql.schema';
import { templatesConnectOptions } from '../config';
import { CreateFieldDto } from './dto';

@Injectable()
export class FieldsService {
  @Client(templatesConnectOptions)
  private readonly client: ClientProxy;

  async create(createFieldDto: CreateFieldDto): Promise<Field> {
    return this.client
      .send({ cmd: 'create_field' }, createFieldDto)
      .toPromise();
  }
}
