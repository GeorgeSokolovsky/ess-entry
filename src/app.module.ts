import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { TemplatesModule } from './templates/templates.module';
import { GraphQLConfigService } from './graphQL-config.service';
import { CommonModule } from './common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigsService } from './common/services';

@Module({
  imports: [
    UsersModule,
    TemplatesModule,
    MongooseModule.forRootAsync({
      imports: [CommonModule],
      useFactory: async (configService: ConfigsService) => ({
        uri: configService.getMongoURI(),
        useNewUrlParser: true,
        useFindAndModify: false,
      }),
      inject: [ConfigsService],
    }),
    GraphQLModule.forRootAsync({
      imports: [UsersModule],
      useClass: GraphQLConfigService,
    }),
  ],
  providers: [GraphQLConfigService],
})
export class AppModule {}
