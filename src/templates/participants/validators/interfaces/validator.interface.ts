import { ValidationRule } from '../enums/validation-rule.enum';
import { Document } from 'mongoose';

export interface Validator extends Document {
  rule: ValidationRule;
  payload?: object | string | number;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
}
