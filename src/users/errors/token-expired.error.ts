import { HttpStatus, HttpException } from '@nestjs/common';

const TOKEN_EXPIRED_ERROR_MESSAGE = 'Your session has been ended';

export const TOKEN_EXPIRED_ERROR = new HttpException(
  TOKEN_EXPIRED_ERROR_MESSAGE,
  HttpStatus.UNAUTHORIZED,
);
