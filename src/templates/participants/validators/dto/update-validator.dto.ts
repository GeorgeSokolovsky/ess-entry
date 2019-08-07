import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UpdateValidatorInput } from '../../../../common/schema/graphql.schema';
import { Payload } from '../types';

export class UpdateValidatorDto extends UpdateValidatorInput {
  @IsString()
  @IsNotEmpty()
  // tslint:disable-next-line:variable-name
  _id: string;

  @MinLength(1)
  rule: string;

  payload: Payload;
}
