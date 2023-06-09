import { IGenericErrorMessage } from './error'

export type IGenericErrorrResponce = {
  statusCode: number
  message: string
  errorMessage: IGenericErrorMessage[]
}
