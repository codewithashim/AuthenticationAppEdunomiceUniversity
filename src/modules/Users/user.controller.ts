import { NextFunction, Request, Response } from 'express'
import { createUserInDB } from './user.service'

const createUser = async (reqx: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body
    const result = await createUserInDB(user)
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export { createUser }
