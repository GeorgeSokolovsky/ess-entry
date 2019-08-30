import { UpdateFieldInput } from '../../../common/schema/graphql.schema';
import { IsAlpha, MaxLength, MinLength } from 'class-validator';

export class UpdateFieldDto extends UpdateFieldInput {
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @MinLength(3)
  @MaxLength(20)
  @IsAlpha()
  type: string;
}
