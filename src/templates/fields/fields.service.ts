import { Injectable } from '@nestjs/common';
import { Field } from '../../common/schema/graphql.schema';
import { CreateFieldDto } from './dto';
import { FieldsRepository } from './fields.repository';

@Injectable()
export class FieldsService {
  constructor(private readonly repository: FieldsRepository) {}

  async create(createFieldDto: CreateFieldDto): Promise<Field> {
    return this.repository.create(createFieldDto);
  }

  async findAll(): Promise<ReadonlyArray<Field>> {
    return await this.repository.findAll();
  }

  async findByIds(ids: string[]): Promise<ReadonlyArray<Field>> {
    return await this.repository.findByIds(ids);
  }
}
