import { ErrorRequestHandler } from 'express'
import config from '../config'
import ApiError from '../errors/ApiError'
import handelValidationError from '../errors/handelValidationError'
import { IGenericErrorMessage } from '../interface/error'
import { errorLogger } from '../shared/loger'

const globalErrorHandler: ErrorRequestHandler = async (
  error,
  req,
  res,
  next
) => {
  // eslint-disable-next-line no-unused-expressions
  config.env === 'development'
    ? // eslint-disable-next-line no-console
      console.log('Globul ErrorHandler ~ ', error)
    : errorLogger.error('Globul ErrorHandler ~', error)

  let statusCode = 500
  let message = 'Somthing Went Wrong !'
  let errorMessage: IGenericErrorMessage[] = []

  if (error.name === 'ValidationError') {
    const simplifiedError = handelValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode
    message = error.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    sucess: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error.stack : undefined,
  })

  next()
}

export default globalErrorHandler
