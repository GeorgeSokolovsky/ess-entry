import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateParticipantDto } from './dto';
import { Participant } from './interfaces/participant.interface';
import { PARTICIPANT_MODEL } from './tokens/participant-model.token';
import { ID } from '../../common/types';

@Injectable()
export class ParticipantsRepository {
  constructor(
    @InjectModel(PARTICIPANT_MODEL)
    private readonly participantModel: Model<Participant>,
  ) {}

  async create(
    createParticipantDto: CreateParticipantDto,
  ): Promise<Participant> {
    const participant = new this.participantModel(createParticipantDto);

    return await participant.save();
  }

  async findAll(): Promise<ReadonlyArray<Participant>> {
    return this.participantModel.find();
  }

  async findByIds(ids: ReadonlyArray<ID>): Promise<ReadonlyArray<Participant>> {
    return this.participantModel.find({ _id: { $in: ids } });
  }
}
