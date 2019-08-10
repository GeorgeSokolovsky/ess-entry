import { Document } from 'mongoose';
import { Field } from '../fields/interface/field.interface';
import { Participant } from '../participants/interfaces/participant.interface';
import { User } from '../../users/interfaces/user.interface';

export interface Template extends Document {
  name: string;
  createdBy: User;
  updatedBy: User;
  createdAt: string;
  updatedAt: string;
  fields: Field[];
  participants: Participant[];
}
