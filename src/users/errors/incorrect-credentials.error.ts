import { HttpException, HttpStatus } from '@nestjs/common';

const INCORRECT_CREDENTIALS_ERROR_MESSAGE = 'Invalid credentials';

export const INCORRECT_CREDENTIALS_ERROR = new HttpException(
  INCORRECT_CREDENTIALS_ERROR_MESSAGE,
  HttpStatus.BAD_REQUEST,
);
