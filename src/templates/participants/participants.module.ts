import { Module } from '@nestjs/common';
import { ValidatorsModule } from './validators/validators.module';
import { ParticipantsResolvers } from './participants.resolvers';
import { ParticipantsService } from './participants.service';
import { ParticipantsRepository } from './participants.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PARTICIPANT_MODEL } from './tokens/participant-model.token';
import { participantSchema } from './schemas/participant.schema';

@Module({
  imports: [
    ValidatorsModule,
    MongooseModule.forFeature([
      {
        name: PARTICIPANT_MODEL,
        schema: participantSchema,
        collection: 'participants',
      },
    ]),
  ],
  providers: [
    ParticipantsResolvers,
    ParticipantsService,
    ParticipantsRepository,
  ],
  exports: [ValidatorsModule, ParticipantsService],
})
export class ParticipantsModule {}
