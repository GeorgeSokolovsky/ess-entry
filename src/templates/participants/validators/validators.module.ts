import { Module } from '@nestjs/common';
import { PayloadScalar } from './scalars';
import { ValidatorsService } from './validators.service';
import { ValidatorsResolvers } from './validators.resolvers';
import { ValidatorsRepository } from './validators.repository';
import { VALIDATOR_MODEL } from './tokens/validator-model.token';
import { MongooseModule } from '@nestjs/mongoose';
import { validatorSchema } from './schemas/validator.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: VALIDATOR_MODEL,
        schema: validatorSchema,
        collection: 'validators',
      },
    ]),
  ],
  providers: [
    PayloadScalar,
    ValidatorsService,
    ValidatorsResolvers,
    ValidatorsRepository,
  ],
  exports: [PayloadScalar, ValidatorsService],
})
export class ValidatorsModule {}
