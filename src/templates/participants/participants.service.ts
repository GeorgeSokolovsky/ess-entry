import { Injectable } from '@nestjs/common';
import { Client, ClientProxy } from '@nestjs/microservices';
import { Participant } from '@common/schema/graphql.schema';
import { templatesConnectOptions } from '../config';
import { CreateParticipantDto } from './dto';

@Injectable()
export class ParticipantsService {
  @Client(templatesConnectOptions)
  private readonly client: ClientProxy;

  async create(
    createParticipantDto: CreateParticipantDto,
  ): Promise<Participant> {
    return await this.client
      .send({ cmd: 'create_participant' }, createParticipantDto)
      .toPromise();
  }

  async findAll(): Promise<ReadonlyArray<Participant>> {
    return await this.client
      .send({ cmd: 'find_all_participants' }, {})
      .toPromise();
  }
}
