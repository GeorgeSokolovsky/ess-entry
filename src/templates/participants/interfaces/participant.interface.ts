import { Document } from 'mongoose';
import { Validator } from '../validators/interfaces/validator.interface';

export interface Participant extends Document {
  name: string;
  role: string;
  validators: Validator[];
}
