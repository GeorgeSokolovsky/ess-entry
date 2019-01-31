import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Optional } from '@common/types';
import { CreateValidatorDto, UpdateValidatorDto } from './dto';
import { ValidatorsService } from './validators.service';
import { Validator } from '@common/schema/graphql.schema';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@common/guards';

@Resolver('Validator')
@UseGuards(new AuthGuard())
export class ValidatorsResolvers {
  constructor(private readonly validatorsService: ValidatorsService) {}

  @Query('validators')
  async findAllValidators(): Promise<Optional<ReadonlyArray<Validator>>> {
    return await this.validatorsService.findAll();
  }

  @Query('validator')
  async findValidator(@Args('id') id: string): Promise<Validator> {
    return await this.validatorsService.findById(id);
  }

  @Mutation()
  async createValidator(
    @Args('createValidatorInput') createValidatorDto: CreateValidatorDto,
  ): Promise<Validator> {
    return await this.validatorsService.create(createValidatorDto);
  }

  @Mutation()
  async updateValidator(
    @Args('updateValidatorInput') updateValidatorDto: UpdateValidatorDto,
  ): Promise<Validator> {
    return await this.validatorsService.update(updateValidatorDto);
  }
}
