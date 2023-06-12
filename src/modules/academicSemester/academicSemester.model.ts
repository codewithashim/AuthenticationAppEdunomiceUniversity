import { Schema, model } from 'mongoose';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constent';
import {
  IAcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';

const academicSemesterSchema = new Schema<IAcademicSemester>({
  title: {
    type: String,
    required: true,
    enum: academicSemesterTitle,
  },
  year: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: academicSemesterCode,
  },
  startMonth: {
    type: String,
    required: true,
    enum: academicSemesterMonth,
  },
  endMonth: {
    type: String,
    required: true,
    enum: academicSemesterMonth,
  },
});

export const AcademicSemesterModel = model<
  IAcademicSemester,
  IAcademicSemesterModel
>('AcademicSemester', academicSemesterSchema);
