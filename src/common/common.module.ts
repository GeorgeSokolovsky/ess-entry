import { Module } from '@nestjs/common';
import { ConfigsService } from './services';
import { PROCESS_TOKEN } from './tokens';

@Module({
  providers: [
    ConfigsService,
    {
      provide: PROCESS_TOKEN,
      useValue: process,
    },
  ],
  exports: [ConfigsService],
})
export class CommonModule {}
