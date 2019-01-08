import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolvers } from './users.resolvers';

@Module({
  providers: [UsersResolvers, UsersService],
})
export class UsersModule {}
