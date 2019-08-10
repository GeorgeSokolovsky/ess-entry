import { Injectable } from '@nestjs/common';
import { CreateValidatorDto, UpdateValidatorDto } from './dto';
import { Validator } from '../../../common/schema/graphql.schema';
import { ValidatorsRepository } from './validators.repository';

@Injectable()
export class ValidatorsService {
  constructor(private readonly repository: ValidatorsRepository) {}

  async create(createValidatorDto: CreateValidatorDto): Promise<Validator> {
    return await this.repository.create(createValidatorDto);
  }

  async findAll(): Promise<ReadonlyArray<Validator>> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<Validator> {
    return await this.repository.findById(id);
  }

  async findByIds(ids: string[]): Promise<ReadonlyArray<Validator>> {
    return await this.repository.findByIds(ids);
  }

  async update(updateValidatorDto: UpdateValidatorDto): Promise<Validator> {
    return await this.repository.update(updateValidatorDto);
  }
}
