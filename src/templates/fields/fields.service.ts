import { Injectable } from '@nestjs/common';
import { Field } from '../../common/schema/graphql.schema';
import { CreateFieldDto, UpdateFieldDto } from './dto';
import { FieldsRepository } from './fields.repository';
import { ID } from '../../common/types';

@Injectable()
export class FieldsService {
  constructor(private readonly repository: FieldsRepository) {}

  async create(createFieldDto: CreateFieldDto): Promise<Field> {
    return this.repository.create(createFieldDto);
  }

  async update(id: ID, patch: UpdateFieldDto): Promise<Field> {
    return this.repository.update(id, patch);
  }

  async findAll(): Promise<ReadonlyArray<Field>> {
    return await this.repository.findAll();
  }

  async findByIds(ids: string[]): Promise<ReadonlyArray<Field>> {
    return await this.repository.findByIds(ids);
  }
}
