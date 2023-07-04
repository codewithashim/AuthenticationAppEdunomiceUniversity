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

export const AuthValidation = {
  createLoginZodSchema,
  refreshTokenSchema,
};
