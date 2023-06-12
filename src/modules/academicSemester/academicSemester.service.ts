import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createSemisterDB = async (payload: IAcademicSemester) => {
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

export const academicSemesterService = {
  createSemisterDB,
};
