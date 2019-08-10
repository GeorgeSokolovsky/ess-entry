import { Document } from 'mongoose';

export interface User extends Document {
  login: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  lastName?: string;
  firstName?: string;
  email?: string;

  comparePassword(password: string): Promise<boolean>;
}
