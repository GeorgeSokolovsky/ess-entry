import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateValidatorDto, UpdateValidatorDto } from './dto';
import { Validator } from './interfaces/validator.interface';
import { VALIDATOR_MODEL } from './tokens/validator-model.token';
import { ID } from '../../../common/types';

@Injectable()
export class ValidatorsRepository {
  constructor(
    @InjectModel(VALIDATOR_MODEL)
    private readonly validatorModel: Model<Validator>,
  ) {}

  async create(createValidatorDto: CreateValidatorDto): Promise<Validator> {
    const validator = new this.validatorModel(createValidatorDto);

    return await validator.save();
  }

  async findAll(): Promise<ReadonlyArray<Validator>> {
    return this.validatorModel.find();
  }

  async findById(id: ID): Promise<Validator> {
    return this.validatorModel.findById(id);
  }

  async findByIds(ids: string[]): Promise<ReadonlyArray<Validator>> {
    return this.validatorModel.find({ _id: { $in: ids } });
  }

  async update({ _id, rule, payload }: UpdateValidatorDto): Promise<Validator> {
    return this.validatorModel.findByIdAndUpdate(_id, { rule, payload });
  }
}
