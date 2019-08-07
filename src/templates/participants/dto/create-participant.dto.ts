import { CreateParticipantInput } from '../../../common/schema/graphql.schema';
import { IsAlphanumeric, MaxLength, MinLength } from 'class-validator';

export class CreateParticipantDto extends CreateParticipantInput {
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @MinLength(1)
  @MaxLength(16)
  @IsAlphanumeric()
  role: string;
}
