import userModel from './user.model'

export const findLastUserId = async () => {
  const lastUser = await userModel
    .findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()

  return lastUser?.id
}

export const genarateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incaraceCounterId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incaraceCounterId
}
