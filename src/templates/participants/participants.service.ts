import { Injectable } from '@nestjs/common';
import { Participant } from '../../common/schema/graphql.schema';
import { CreateParticipantDto } from './dto';
import { ParticipantsRepository } from './participants.repository';

@Injectable()
export class ParticipantsService {
  constructor(private readonly repository: ParticipantsRepository) {}

  async create(
    createParticipantDto: CreateParticipantDto,
  ): Promise<Participant> {
    return await this.repository.create(createParticipantDto);
  }

  async findAll(): Promise<ReadonlyArray<Participant>> {
    return await this.repository.findAll();
  }

  async findByIds(
    ids: ReadonlyArray<string>,
  ): Promise<ReadonlyArray<Participant>> {
    return await this.repository.findByIds(ids);
  }
}
