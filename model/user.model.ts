import { Schema, model, connect } from 'mongoose';
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator')

interface IUser {
  username: string;
  email: string;
  password: string;
};

const userSchema = new Schema<IUser>({
  username: { type: String, required: [true, "username is required"] },
  email: { type: String, required: [true, "email is required"] },
  password: { type: String, required: [true, "password is required"]},
});


userSchema.pre('save', async function (next) {
  try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      next();
  } catch (error) {
      console.log('ERROR IN SAVE', error);
  }
});

userSchema.plugin(uniqueValidator);

module.exports = model<IUser>('User', userSchema);