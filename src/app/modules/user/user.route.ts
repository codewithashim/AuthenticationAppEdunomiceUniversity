import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { createUserValidator } from './user.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createUserValidator.createUserZodSchema),
  UserController.createStudent
);

export const UserRoutes = router;
