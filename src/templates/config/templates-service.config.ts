import { ClientOptions, Transport } from '@nestjs/microservices';

export const templatesConnectOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host: process.env.TEMPLATES_HOST || 'localhost',
    port: +process.env.TEMPLATES_PORT || 9002,
  },
};
