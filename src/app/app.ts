import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app: Application = express()

///////////////////////////////////////////////
//                 Import FIle               //
/////////////////////////////////////////////*/
import userRouter from '../modules/Users/user.router'
import globalErrorHandler from '../middlewares/globalErrorHandler'

///////        End of Import FIle     ////////

///////////////////////////////////////////////
//                  Middilware               //
/////////////////////////////////////////////*/
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(globalErrorHandler)

///////       End of Middilware      ////////

///////////////////////////////////////////////
//              Router Setup                 //
/////////////////////////////////////////////*/
app.use('/api/v1/users', userRouter)

///////      End of Router Setup      ////////

export default app
