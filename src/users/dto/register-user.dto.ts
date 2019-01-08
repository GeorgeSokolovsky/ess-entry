import { MaxLength, MinLength, IsAlphanumeric } from 'class-validator';
import { RegisterUserInput } from '@common/schema/graphql.schema';

export class RegisterUserDto extends RegisterUserInput {
  @IsAlphanumeric()
  @MinLength(4)
  @MaxLength(16)
  login: string;

  @IsAlphanumeric()
  @MinLength(6)
  @MaxLength(16)
  password: string;
}
