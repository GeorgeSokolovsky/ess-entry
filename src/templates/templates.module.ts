import { Module } from '@nestjs/common';
import { ValidatorsModule } from './validators/validators.module';

@Module({
  imports: [ValidatorsModule],
})
export class TemplatesModule {}
