import { Module } from '@nestjs/common';
import { FieldsModule } from './fields/fields.module';
import { ParticipantsModule } from './participants/participants.module';

@Module({
  imports: [ParticipantsModule, FieldsModule],
})
export class TemplatesModule {}
