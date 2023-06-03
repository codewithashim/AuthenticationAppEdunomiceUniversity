import { NextFunction, Request, Response } from 'express'
import config from '../config'
import { IGenericErrorMessage } from '../interface/error'

const globalErrorHandler = async (
  err: IGenericErrorMessage,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500
  const message = 'Somthing Went Wrong !'
  const errorMessage: IGenericErrorMessage[] = []

  res.status(statusCode).json({
    sucess: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? err.stack : undefined,
  })

  next()
}

export default globalErrorHandler
