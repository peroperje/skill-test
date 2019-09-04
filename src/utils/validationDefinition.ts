import * as yup from 'yup';

export const email = yup
  .string()
  .email('Email is not valid')
  .required('Email is required');

export const password = yup
  .string()
  .required('Password is required')
  .min(3, 'Min length is 3')
  .max(8, 'Max length is 8');
