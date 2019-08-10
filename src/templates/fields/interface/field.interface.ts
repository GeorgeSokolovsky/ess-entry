import { Document } from 'mongoose';

export interface Field extends Document {
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}
