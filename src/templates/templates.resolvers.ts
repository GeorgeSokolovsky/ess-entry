import {
  Args,
  Parent,
  Query,
  Resolver,
  ResolveProperty,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards';
import {
  CreateTemplateInput,
  Field,
  Participant,
  Template,
  UpdateTemplateInput,
  User,
} from '../common/schema/graphql.schema';
import { TemplatesService } from './templates.service';
import { FieldsService } from './fields/fields.service';
import { TemplateQuery } from './interfaces';
import { ParticipantsService } from './participants/participants.service';
import { GraphQLContext } from '../common/interfaces';
import { UsersService } from '../users/users.service';

@Resolver('Template')
@UseGuards(new AuthGuard())
export class TemplatesResolvers {
  constructor(
    private readonly templatesService: TemplatesService,
    private readonly fieldsService: FieldsService,
    private readonly participantsService: ParticipantsService,
    private readonly usersService: UsersService,
  ) {}

  @Query('templates')
  async findAllTemplates(): Promise<ReadonlyArray<Template>> {
    return await this.templatesService.findAll();
  }

  @Query('template')
  async findTemplateById(@Args('id') id: string): Promise<Template> {
    return await this.templatesService.findOneById(id);
  }

  @ResolveProperty('fields')
  async getFields(@Parent() { fields }: TemplateQuery): Promise<
    ReadonlyArray<Field>
  > {
    return await this.fieldsService.findByIds(fields);
  }

  @ResolveProperty('participants')
  async getParticipants(@Parent() { participants }: TemplateQuery): Promise<
    ReadonlyArray<Participant>
  > {
    return await this.participantsService.findByIds(participants);
  }

  @ResolveProperty('createdBy')
  async getCreatedByUser(@Parent() { createdBy }: TemplateQuery): Promise<
    User
  > {
    return await this.usersService.findUserById(createdBy);
  }

  @ResolveProperty('updatedBy')
  async getUpdatedByUser(@Parent() { updatedBy }: TemplateQuery): Promise<
    User
  > {
    return updatedBy ? await this.usersService.findUserById(updatedBy) : null;
  }

  @Mutation()
  async createTemplate(
    @Args('createTemplateInput') createTemplateInput: CreateTemplateInput,
    @Context() { user }: GraphQLContext,
  ): Promise<Template> {
    const createTemplateDto = {
      ...createTemplateInput,
      createdBy: user._id,
    };

    return await this.templatesService.create(createTemplateDto);
  }

  @Mutation()
  async updateTemplate(
    @Args('id') id: string,
    @Args('updateTemplateInput') updateTemplateInput: UpdateTemplateInput,
    @Context() { user }: GraphQLContext,
  ) {
    const updateTemplateDto = {
      ...updateTemplateInput,
      updatedBy: user._id,
    };

    return await this.templatesService.updateTemplate(id, updateTemplateDto);
  }
}
