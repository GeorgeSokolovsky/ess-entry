import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { TemplatesModule } from './templates/templates.module';
import { GraphQLConfigService } from './graphQL-config.service';

@Module({
  imports: [
    UsersModule,
    TemplatesModule,
    GraphQLModule.forRootAsync({
      imports: [UsersModule],
      useClass: GraphQLConfigService,
    }),
  ],
  providers: [GraphQLConfigService],
})
export class AppModule {}
