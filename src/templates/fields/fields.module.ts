import { Module } from '@nestjs/common';
import { FieldsResolvers } from './fields.resolvers';
import { FieldsService } from './fields.service';

@Module({
  providers: [FieldsResolvers, FieldsService],
})
export class FieldsModule {}
