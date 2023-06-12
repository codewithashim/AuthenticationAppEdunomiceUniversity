/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app: Application = express();

///////////////////////////////////////////////
//                 Import FIle               //
/////////////////////////////////////////////*/
import userRouter from '../modules/Users/user.router';
import globalErrorHandler from '../middlewares/globalErrorHandler';
import SemisterRouter from '../modules/academicSemester/academicSemester.router';

///////        End of Import FIle     ////////

///////////////////////////////////////////////
//                  Middilware               //
/////////////////////////////////////////////*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(globalErrorHandler);

///////       End of Middilware      ////////

///////////////////////////////////////////////
//              Router Setup                 //
/////////////////////////////////////////////*/
app.use('/api/v1/users', userRouter);
app.use('/api/v1/academic-semisters', SemisterRouter);

///////      End of Router Setup      ////////

export default app;
