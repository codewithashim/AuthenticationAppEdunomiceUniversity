import { userModel } from './user.model';
import { IUser } from './user.interface';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { logger } from '../../shared/loger';
import { generateUserId } from './user.utils';

const createUserInDB = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId();
  user.id = id;
  logger.info(`user id: ${id}`);

  if (!user?.password) {
    user.password = config.default_user_password as string;
  }

  const createUser = await userModel.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Failed to create');
  }
  return createUser;
};

export const UserService = { createUserInDB };
