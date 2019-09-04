import React from 'react';
import { Formik, FormikProps } from 'formik';

import validationSchema from './validation';

export interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: ''
};

const Login: React.FC = (): JSX.Element => {
  return (
    <>
      <Formik
        onSubmit={(values: FormValues): void => {
          console.log(values);
        }}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched
        }: FormikProps<FormValues>): JSX.Element => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="Flex-column">
                <input
                  name="email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}
                <button type="submit">Login</button>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
