import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../interface/common';
import { IGenericErrorMessage } from '../interface/error';

const handelZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path.length - 1],
      message: issue?.message,
    };
  });

  return {
    statusCode: 400,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handelZodError;
