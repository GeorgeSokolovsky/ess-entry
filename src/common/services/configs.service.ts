import { Inject, Injectable } from '@nestjs/common';
import { PROCESS_TOKEN } from '../tokens';
import { Process } from '../interfaces';

const DEFAULT_MONGO_URI = 'mongodb://localhost:27017/ess';

@Injectable()
export class ConfigsService {
  constructor(@Inject(PROCESS_TOKEN) private readonly process: Process) {}

  getAuthSecretKey(): string {
    return this.process.env.AUTH_SECRET_KEY;
  }

  getAuthExpiresIn(): number {
    return this.process.env.AUTH_EXPIRES_IN;
  }

  getMongoURI(): string {
    return this.process.env.MONGODB_URI || DEFAULT_MONGO_URI;
  }
}
