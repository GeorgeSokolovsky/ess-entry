import { Module } from '@nestjs/common';
import { ValidatorsModule } from './validators/validators.module';
import { FieldsModule } from './fields/fields.module';

@Module({
  imports: [ValidatorsModule, FieldsModule],
})
export class TemplatesModule {}
