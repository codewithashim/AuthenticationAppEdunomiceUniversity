import { z } from 'zod';

const createLoginZodSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: 'id is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
  }),
});

const refreshTokenSchema = z.object({
  cookie: z.object({
    refreshToken: z.string({
      required_error: 'refreshToken is required',
    }),
  }),
});

const changePasswordSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'oldPassword is required',
    }),
    newPassword: z.string({
      required_error: 'newPassword is required',
    }),
   
  }),
});

export const AuthValidation = {
  createLoginZodSchema,
  refreshTokenSchema,
  changePasswordSchema,
};
