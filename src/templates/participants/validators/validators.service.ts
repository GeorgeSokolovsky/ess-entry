import { Injectable } from '@nestjs/common';
import { Client, ClientProxy } from '@nestjs/microservices';
import { CreateValidatorDto } from './dto';
import { Validator } from '@common/schema/graphql.schema';
import { templatesConnectOptions } from '../../config';

@Injectable()
export class ValidatorsService {
  @Client(templatesConnectOptions)
  private readonly client: ClientProxy;

  async create(createValidatorDto: CreateValidatorDto): Promise<Validator> {
    return await this.client
      .send({ cmd: 'create_validator' }, createValidatorDto)
      .toPromise();
  }

  async findAll(): Promise<ReadonlyArray<Validator>> {
    return await this.client
      .send({ cmd: 'find_all_validators' }, {})
      .toPromise();
  }

  async findByIds(ids: string[]): Promise<ReadonlyArray<Validator>> {
    return await this.client
      .send({ cmd: 'find_by_ids_validators' }, ids)
      .toPromise();
  }
}
