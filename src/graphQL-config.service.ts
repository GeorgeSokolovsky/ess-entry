import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';
import { UsersService } from '@common/services';
import { User } from '@common/schema/graphql.schema';

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
  constructor(private readonly userService: UsersService) {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    return {
      context: async ({ req }) => {
        const header = req.headers.authorization || '';
        const [, token] = header.split(' ');
        let user: User;

        try {
          user = await this.userService.verifyToken(token || '');
        } catch (e) {
          user = null;
        }

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
