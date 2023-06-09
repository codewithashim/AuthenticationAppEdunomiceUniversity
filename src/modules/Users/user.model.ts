import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const UserSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default model<IUser, UserModel>('User', UserSchema)
