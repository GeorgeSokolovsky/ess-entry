import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FieldsResolvers } from './fields.resolvers';
import { FieldsService } from './fields.service';
import { FieldsRepository } from './fields.repository';
import { fieldSchema } from './schemas/field.schema';
import { FIELD_MODEL } from './tokens/field-model.token';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FIELD_MODEL, schema: fieldSchema, collection: 'fields' },
    ]),
  ],
  providers: [FieldsResolvers, FieldsService, FieldsRepository],
  exports: [FieldsService],
})
export class FieldsModule {}
