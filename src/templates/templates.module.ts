import { Module } from '@nestjs/common';
import { FieldsModule } from './fields/fields.module';
import { ParticipantsModule } from './participants/participants.module';
import { TemplatesResolvers } from './templates.resolvers';
import { TemplatesService } from './templates.service';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TEMPLATE_MODEL } from './tokens/template-model.token';
import { templateSchema } from './schemas/template.schema';
import { TemplatesRepository } from './templates.repository';

@Module({
  imports: [
    ParticipantsModule,
    FieldsModule,
    UsersModule,
    MongooseModule.forFeature([
      {
        name: TEMPLATE_MODEL,
        schema: templateSchema,
        collection: 'templates',
      },
    ]),
  ],
  providers: [TemplatesResolvers, TemplatesService, TemplatesRepository],
})
export class TemplatesModule {}
