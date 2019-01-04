import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Optional } from '../../common/types';
import { CreateValidatorDto } from './dto';
import { ValidatorsService } from './validators.service';
import { Validator } from '../../common/schema/graphql.schema';

@Resolver('Validator')
export class ValidatorsResolvers {
  constructor(private readonly validatorsService: ValidatorsService) {}

  @Query('validators')
  async findAllValidators(): Promise<Optional<ReadonlyArray<Validator>>> {
    return await this.validatorsService.findAll();
  }

  @Mutation()
  async createValidator(
    @Args('createValidatorInput') createValidatorDto: CreateValidatorDto,
  ): Promise<Validator> {
    return await this.validatorsService.create(createValidatorDto);
  }
}
