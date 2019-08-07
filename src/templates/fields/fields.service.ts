import { Injectable } from '@nestjs/common';
import { Client, ClientProxy } from '@nestjs/microservices';
import { Field } from '../../common/schema/graphql.schema';
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

  async findAll(): Promise<ReadonlyArray<Field>> {
    return await this.client.send({ cmd: 'find_all_fields' }, {}).toPromise();
  }

  async findByIds(ids: string[]): Promise<ReadonlyArray<Field>> {
    return await this.client
      .send({ cmd: 'find_by_ids_fields' }, ids)
      .toPromise();
  }
}
