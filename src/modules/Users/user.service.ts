import userModel from './user.model'
import { IUser } from './user.interface'
import config from '../../config'
import { genarateUserId } from './user.utils'

const createUserInDB = async (user: IUser): Promise<IUser | null> => {
  // auto gentaretd incrimental id
  // default student password

  const id = await genarateUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createUser = await userModel.create(user)
  if (!createUser) {
    throw new Error('Error creating user')
  } else {
    return createUser
  }
}



export { createUserInDB }
