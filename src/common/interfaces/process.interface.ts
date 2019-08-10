export interface Process {
  env: {
    AUTH_SECRET_KEY?: string;
    AUTH_EXPIRES_IN?: number;
    MONGODB_URI?: string;
  };
}
