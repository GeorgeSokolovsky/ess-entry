import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';
import { UsersService } from '@common/services';

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
  constructor(private readonly userService: UsersService) {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    return {
      context: async ({ req }) => {
        const token = req.headers.authorization || '';
        const user = await this.userService.verifyToken(token);

        return {
          user,
        };
      },
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/common/schema/graphql.schema.ts'),
        outputAs: 'class',
      },
    };
  }
}
