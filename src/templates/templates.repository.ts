import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTemplateDto } from './dto';
import { ID } from '../common/types';
import { TEMPLATE_MODEL } from './tokens/template-model.token';
import { Template } from './interfaces/template.interface';
import { TemplatePatch } from './interfaces/template-patch.interface';

@Injectable()
export class TemplatesRepository {
  constructor(
    @InjectModel(TEMPLATE_MODEL)
    private readonly templateModel: Model<Template>,
  ) {}

  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    return await new this.templateModel(createTemplateDto).save();
  }

  async findAll(): Promise<ReadonlyArray<Template>> {
    return this.templateModel.find();
  }

  async findById(id: ID): Promise<Template> {
    return this.templateModel.findById(id);
  }

  async update(id: ID, templatePatch: TemplatePatch): Promise<Template> {
    return this.templateModel.findByIdAndUpdate(id, templatePatch);
  }

  async remove(id: ID): Promise<Template> {
    return this.templateModel.findByIdAndRemove(id);
  }
}
