import { Schema } from 'mongoose';
import { compare, genSalt, hash } from 'bcrypt';
import { User } from '../interfaces/user.interface';

const SALT_WORK_FACTOR = 10;

export const UserSchema = new Schema(
  {
    login: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    lastName: String,
    firstName: String,
    email: String,
    role: String,
  },
  {
    timestamps: true,
  },
);

UserSchema.pre<User>('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await genSalt(SALT_WORK_FACTOR);

    this.password = await hash(this.password, salt);

    next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await compare(candidatePassword, this.password);
  } catch (err) {
    return await Promise.reject(err);
  }
};
