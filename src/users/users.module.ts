import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersResolvers } from './users.resolvers';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { CommonModule } from '../common/common.module';
import { ConfigsService } from '../common/services';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_MODEL } from './models/user.model.token';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [CommonModule],
      useFactory: async (configsService: ConfigsService) => ({
        secretOrPrivateKey: configsService.getAuthSecretKey(),
        signOptions: {
          expiresIn: configsService.getAuthExpiresIn(),
        },
      }),
      inject: [ConfigsService],
    }),
    MongooseModule.forFeature([
      { name: USER_MODEL, schema: UserSchema, collection: 'users' },
    ]),
  ],
  providers: [UsersResolvers, UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
