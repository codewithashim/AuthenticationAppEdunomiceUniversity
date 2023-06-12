import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.Validation';
const router = express.Router();

router.post(
  '/create-semister',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createSemester
);

const SemisterRouter = router;

export default SemisterRouter;
