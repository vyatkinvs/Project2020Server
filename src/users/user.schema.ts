import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  email: string;
  name: string;
  password: string;
}

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String },
  password: { type: String, required: true },
});
