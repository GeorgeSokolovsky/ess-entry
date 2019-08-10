import { MinLength } from 'class-validator';
import { CreateValidatorInput } from '../../../../common/schema/graphql.schema';
import { Payload } from '../types';
import { ValidationRule } from '../enums/validation-rule.enum';

export class CreateValidatorDto extends CreateValidatorInput {
  @MinLength(1)
  rule: ValidationRule;

  payload: Payload;
}
