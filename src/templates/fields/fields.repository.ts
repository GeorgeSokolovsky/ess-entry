import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFieldDto, UpdateFieldDto } from './dto';
import { FIELD_MODEL } from './tokens/field-model.token';
import { ID } from '../../common/types';
import { Field } from './interface/field.interface';

@Injectable()
export class FieldsRepository {
  constructor(
    @InjectModel(FIELD_MODEL) private readonly fieldModel: Model<Field>,
  ) {}

  async create(createFieldDto: CreateFieldDto): Promise<Field> {
    const field = new this.fieldModel(createFieldDto);

    return await field.save();
  }

  async update(id: ID, patch: UpdateFieldDto): Promise<Field> {
    return this.fieldModel.findByIdAndUpdate(id, patch);
  }

  async findAll(): Promise<ReadonlyArray<Field>> {
    return this.fieldModel.find();
  }

  async findByIds(ids: ReadonlyArray<ID>): Promise<ReadonlyArray<Field>> {
    return this.fieldModel.find({ _id: { $in: ids } });
  }
}
