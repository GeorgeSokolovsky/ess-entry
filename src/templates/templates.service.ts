import { Injectable } from '@nestjs/common';
import { Client, ClientProxy } from '@nestjs/microservices';
import { templatesConnectOptions } from './config';
import { Template } from '../common/schema/graphql.schema';
import { CreateTemplateDto, UpdateTemplateDto } from './dto';

@Injectable()
export class TemplatesService {
  @Client(templatesConnectOptions)
  private readonly client: ClientProxy;

  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    return await this.client
      .send({ cmd: 'create_template' }, createTemplateDto)
      .toPromise();
  }

  async findAll(): Promise<ReadonlyArray<Template>> {
    return await this.client
      .send({ cmd: 'find_all_templates' }, {})
      .toPromise();
  }

  async findOneById(id: string): Promise<Template> {
    return await this.client
      .send({ cmd: 'find_by_id_template' }, id)
      .toPromise();
  }

  async updateTemplate(
    id: string,
    patch: UpdateTemplateDto,
  ): Promise<Template> {
    return await this.client
      .send({ cmd: 'modify_template' }, { id, patch })
      .toPromise();
  }
}
