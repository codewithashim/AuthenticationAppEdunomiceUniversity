import mongoose from 'mongoose'
import { IGenericErrorrResponce } from '../interface/common'
import { IGenericErrorMessage } from '../interface/error'

const handelValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorrResponce => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el.message,
      }
    }
  )

  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}

export default handelValidationError
