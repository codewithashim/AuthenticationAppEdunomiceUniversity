import { Schema, model, Model } from 'mongoose'
import { IUser } from './user.interface'

type UserModel = Model<IUser, object>

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
