import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { Field } from '@common/schema/graphql.schema';
import { CreateFieldDto } from './dto';
import { FieldsService } from './fields.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@common/guards';

@Resolver('Field')
@UseGuards(new AuthGuard())
export class FieldsResolvers {
  constructor(private readonly fieldsService: FieldsService) {}

  @Mutation()
  async createField(
    @Args('createFieldInput') createFieldInput: CreateFieldDto,
  ): Promise<Field> {
    return this.fieldsService.create(createFieldInput);
  }
}
