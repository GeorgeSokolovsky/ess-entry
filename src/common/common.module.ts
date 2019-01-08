import { Module } from '@nestjs/common';
import { UsersService } from '@common/services';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class CommonModule {}
