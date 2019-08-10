import { Injectable } from '@nestjs/common';
import { Template } from '../common/schema/graphql.schema';
import { CreateTemplateDto, UpdateTemplateDto } from './dto';
import { TemplatesRepository } from './templates.repository';

@Injectable()
export class TemplatesService {
  constructor(private readonly repository: TemplatesRepository) {}

  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    return await this.repository.create(createTemplateDto);
  }

  async findAll(): Promise<ReadonlyArray<Template>> {
    return await this.repository.findAll();
  }

  async findOneById(id: string): Promise<Template> {
    return await this.repository.findById(id);
  }

  async updateTemplate(
    id: string,
    patch: UpdateTemplateDto,
  ): Promise<Template> {
    return await this.repository.update(id, patch);
  }
}
