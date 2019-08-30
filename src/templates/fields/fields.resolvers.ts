import { Args, Query, Resolver, Mutation, Context } from '@nestjs/graphql';
import { Field } from '../../common/schema/graphql.schema';
import { CreateFieldDto, UpdateFieldDto } from './dto';
import { FieldsService } from './fields.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards';
import { ID } from '../../common/types';
import { GraphQLContext } from '../../common/interfaces';

@Resolver('Field')
@UseGuards(new AuthGuard())
export class FieldsResolvers {
  constructor(private readonly fieldsService: FieldsService) {}

  @Query('fields')
  async findAllFields(): Promise<ReadonlyArray<Field>> {
    return await this.fieldsService.findAll();
  }

  @Mutation()
  async createField(
    @Args('createFieldInput') createFieldInput: CreateFieldDto,
  ): Promise<Field> {
    return this.fieldsService.create(createFieldInput);
  }

  @Mutation()
  async updateField(
    @Args('id') id: ID,
    @Args('updateFieldInput') updateFieldInput: UpdateFieldDto,
    @Context() { user }: GraphQLContext,
  ): Promise<Field> {
    return this.fieldsService.update(id, updateFieldInput);
  }
}
