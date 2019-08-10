import { Schema } from 'mongoose';

export const validatorSchema = new Schema(
  {
    rule: {
      type: Schema.Types.String,
      required: true,
    },
    payload: {
      type: Schema.Types.Mixed,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);
