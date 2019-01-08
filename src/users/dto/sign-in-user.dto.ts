import { IsAlphanumeric, MaxLength, MinLength } from 'class-validator';
import { SignInUserInput } from '@common/schema/graphql.schema';

export class SignInUserDto extends SignInUserInput {
  @IsAlphanumeric()
  @MinLength(4)
  @MaxLength(16)
  login: string;

  @IsAlphanumeric()
  @MinLength(6)
  @MaxLength(16)
  password: string;
}
