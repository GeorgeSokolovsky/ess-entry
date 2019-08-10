import { Schema } from 'mongoose';
import { VALIDATOR_MODEL } from '../validators/tokens/validator-model.token';

export const participantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    validators: [{ type: Schema.Types.ObjectId, ref: VALIDATOR_MODEL }],
  },
  {
    timestamps: true,
  },
);
