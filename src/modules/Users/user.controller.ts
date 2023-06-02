import { Request, Response } from 'express'
import { createUserInDB } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const {user} = req.body
    const result = await createUserInDB(user)
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    })
  }
}

export { createUser }
