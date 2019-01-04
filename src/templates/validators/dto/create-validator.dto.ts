import { MinLength } from 'class-validator';
import { CreateValidatorInput } from '../../../common/schema/graphql.schema';
import { Payload } from '../types';

export class CreateValidatorDto extends CreateValidatorInput {
  @MinLength(1)
  rule: string;

  payload: Payload;
}
