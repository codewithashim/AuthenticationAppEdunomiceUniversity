import userModel from './user.model'
import { IUser } from './user.interface'
import config from '../../config'
import { genarateUserId } from './user.utils'
import ApiError from '../../errors/ApiError'

const createUserInDB = async (user: IUser): Promise<IUser | null> => {
  const id = await genarateUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createUser = await userModel.create(user)
  if (!createUser) {
    throw new ApiError(400, 'Error creating user')
  } else {
    return createUser
  }
}

export { createUserInDB }
