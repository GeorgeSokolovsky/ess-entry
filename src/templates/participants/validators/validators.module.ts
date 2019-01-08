import { Module } from '@nestjs/common';
import { PayloadScalar } from './scalars';
import { ValidatorsService } from './validators.service';
import { ValidatorsResolvers } from './validators.resolvers';

@Module({
  providers: [PayloadScalar, ValidatorsService, ValidatorsResolvers],
  exports: [PayloadScalar, ValidatorsService],
})
export class ValidatorsModule {}
