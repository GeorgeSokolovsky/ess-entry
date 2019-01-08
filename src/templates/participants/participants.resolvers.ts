import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { Participant, Validator } from '@common/schema/graphql.schema';
import { ValidatorsService } from './validators/validators.service';
import { ParticipantsService } from './participants.service';
import { CreateParticipantDto } from './dto';
import { ParticipantQuery } from './interfaces';

@Resolver('Participant')
export class ParticipantsResolvers {
  constructor(
    private readonly participantsService: ParticipantsService,
    private readonly validatorsService: ValidatorsService,
  ) {}

  @Query('participants')
  async findAllParticipants(): Promise<ReadonlyArray<Participant>> {
    return await this.participantsService.findAll();
  }

  @Mutation()
  async createParticipant(
    @Args('createParticipantInput') createParticipantDto: CreateParticipantDto,
  ): Promise<Participant> {
    return await this.participantsService.create(createParticipantDto);
  }

  @ResolveProperty('validators')
  async getValidators(@Parent() { validators }: ParticipantQuery): Promise<
    ReadonlyArray<Validator>
  > {
    return await this.validatorsService.findByIds(validators);
  }
}
