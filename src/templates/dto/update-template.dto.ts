import { UpdateTemplateInput } from '@common/schema/graphql.schema';
import {
  IsAlphanumeric,
  IsArray,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateTemplateDto extends UpdateTemplateInput {
  @MinLength(1)
  @MaxLength(16)
  name: string;

  @IsArray()
  fields: string[];

  @IsArray()
  participants: string[];

  @Length(24)
  @IsAlphanumeric()
  updatedBy: string;
}
