import { Module } from '@nestjs/common';
import { UsersResolvers } from './users.resolvers';
import { CommonModule } from '@common/common.module';

@Module({
  imports: [CommonModule],
  providers: [UsersResolvers],
})
export class UsersModule {}
