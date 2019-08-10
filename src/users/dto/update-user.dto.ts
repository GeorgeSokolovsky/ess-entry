import { MaxLength, MinLength, IsAlphanumeric, IsAlpha } from 'class-validator';
import { UpdateUserInput } from '../../common/schema/graphql.schema';
import { ID } from '../../common/types';

export class UpdateUserDto extends UpdateUserInput {
  @IsAlphanumeric()
  id: ID;

  @IsAlpha()
  @MinLength(1)
  @MaxLength(16)
  firstName: string;

  @IsAlpha()
  @MinLength(1)
  @MaxLength(16)
  secondName: string;
}
