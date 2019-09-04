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

export const files = yup
  .mixed()
  .required('A file is required')
  .test('fileFormat', 'Unsupported Format', value => {
    return (
      value !== null &&
      value.length > 0 &&
      value[0] !== null &&
      [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
        'text/csv'
      ].includes(value[0].type)
    );
  });
