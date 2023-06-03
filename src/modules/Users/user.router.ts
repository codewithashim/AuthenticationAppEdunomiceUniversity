import express from 'express'
import { createUser } from './user.controller'
const userRouter = express.Router()

userRouter.post('/create', createUser)

export default userRouter
