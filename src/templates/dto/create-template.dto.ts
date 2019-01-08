import { CreateTemplateInput } from '@common/schema/graphql.schema';
import {
  IsAlphanumeric,
  IsArray,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTemplateDto extends CreateTemplateInput {
  @MinLength(1)
  @MaxLength(16)
  name: string;

  @IsArray()
  fields: string[];

  @IsArray()
  participants: string[];

  @IsAlphanumeric()
  @Length(24)
  createdBy: string;
}
