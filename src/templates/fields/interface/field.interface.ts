import { Document } from 'mongoose';
import { User } from '../../../users/interfaces/user.interface';

export interface Field extends Document {
  name: string;
  type: string;
  createdAt: string;
  createdBy: User;
  updatedAt?: string;
  updatedBy?: User;
}
