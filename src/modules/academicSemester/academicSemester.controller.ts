import { RequestHandler } from 'express';
import { academicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await academicSemesterService.createSemisterDB(
      academicSemesterData
    );
    res.status(201).json({
      success: true,
      message: 'Semester created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const academicSemesterController = { createSemester };
