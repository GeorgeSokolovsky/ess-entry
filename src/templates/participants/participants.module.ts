import { Module } from '@nestjs/common';
import { ValidatorsModule } from './validators/validators.module';
import { ParticipantsResolvers } from './participants.resolvers';
import { ParticipantsService } from './participants.service';

@Module({
  imports: [ValidatorsModule],
  providers: [ParticipantsResolvers, ParticipantsService],
  exports: [ValidatorsModule, ParticipantsService],
})
export class ParticipantsModule {}
