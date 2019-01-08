import { Module } from '@nestjs/common';
import { FieldsModule } from './fields/fields.module';
import { ParticipantsModule } from './participants/participants.module';
import { TemplatesResolvers } from './templates.resolvers';
import { TemplatesService } from './templates.service';
import { CommonModule } from '@common/common.module';

@Module({
  imports: [CommonModule, ParticipantsModule, FieldsModule],
  providers: [TemplatesResolvers, TemplatesService],
})
export class TemplatesModule {}
