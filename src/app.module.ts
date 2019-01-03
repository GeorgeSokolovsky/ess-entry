import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/common/schema/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
  ],
})
export class AppModule {}
