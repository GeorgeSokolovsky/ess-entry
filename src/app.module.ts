import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { TemplatesModule } from './templates/templates.module';
import { GraphQLConfigService } from './graphQL-config.service';
import { CommonModule } from '@common/common.module';

@Module({
  imports: [
    UsersModule,
    TemplatesModule,
    GraphQLModule.forRootAsync({
      imports: [CommonModule],
      useClass: GraphQLConfigService,
    }),
  ],
  providers: [GraphQLConfigService],
})
export class AppModule {}
