import { CreateFieldInput } from '../../../common/schema/graphql.schema';
import { IsAlpha, IsAlphanumeric, MaxLength, MinLength } from 'class-validator';

export class CreateFieldDto extends CreateFieldInput {
  @MinLength(4)
  @MaxLength(20)
  @IsAlphanumeric()
  name: string;

  @MinLength(3)
  @MaxLength(20)
  @IsAlpha()
  type: string;
}
