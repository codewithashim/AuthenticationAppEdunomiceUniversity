import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app: Application = express()

///////////////////////////////////////////////
//                  Middilware               //
/////////////////////////////////////////////*/
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

///////       End of Middilware      ////////


///////////////////////////////////////////////
//              Router Setup                 //
/////////////////////////////////////////////*/
import userRouter from '../modules/Users/user.router';


// ================  Routes  =============== //
app.use('/api/v1/users', userRouter)


///////      End of Router Setup      ////////



export default app
