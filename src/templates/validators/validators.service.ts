import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { CreateValidatorDto } from './dto';
import { Validator } from '../../common/schema/graphql.schema';

@Injectable()
export class ValidatorsService {
  @Client({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 9002,
    },
  })
  private readonly client: ClientProxy;

  async create(createValidatorDto: CreateValidatorDto): Promise<Validator> {
    return this.client
      .send({ cmd: 'create_validator' }, createValidatorDto)
      .toPromise();
  }

  async findAll(): Promise<ReadonlyArray<Validator>> {
    return this.client.send({ cmd: 'get_all_validators' }, {}).toPromise();
  }
}
