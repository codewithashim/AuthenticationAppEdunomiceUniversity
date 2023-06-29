/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.MONGO_URI,
  default_student_pass: process.env.DEFAULT_STIDENT_PASSWORD,
  default_admin_pass: process.env.DEFAULT_ADMIN_PASSWORD,
  default_faculty_pass: process.env.DEFAULT_FACULTY_PASSWORD,
};
