import { Schema } from 'mongoose';

export const fieldSchema = new Schema(
  {
    name: Schema.Types.String,
    type: Schema.Types.String,
  },
  {
    timestamps: true,
  },
);
