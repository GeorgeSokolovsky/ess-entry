import { Schema } from 'mongoose';
import { VALIDATOR_MODEL } from '../participants/validators/tokens/validator-model.token';
import { PARTICIPANT_MODEL } from '../participants/tokens/participant-model.token';

export const templateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fields: [
      {
        type: Schema.Types.ObjectId,
        ref: VALIDATOR_MODEL,
      },
    ],
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: PARTICIPANT_MODEL,
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
