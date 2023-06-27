import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../academicFculty/academicFculty.interface';
import { IAcademicDepartment } from '../academicDipertment/academicDipertment.interface';
import { IAcademicSemester } from '../academicSemester/academicSemester.interface';

export type username = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
};

export type localGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type IStudent = {
  id: string;
  name: username;
  dateOfBirth: string;
  email: string;
  phone: string;
  gender: 'male' | 'female';
  bloodGrup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: guardian;
  localGuardian: localGuardian;
  profileImage?: string;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
  academicDepartment: Types.ObjectId | IAcademicDepartment;
  academicSemester: Types.ObjectId | IAcademicSemester;
};

export type StudentModelType = Model<IStudent, Record<string, unknown>>;

export type IStudentFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};
