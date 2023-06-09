import express from 'express'
import { UserController } from './user.controller'
const userRouter = express.Router()

userRouter.post('/create', UserController.createUser)

export default userRouter
