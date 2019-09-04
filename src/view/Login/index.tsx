import React from 'react';
import { Formik, FormikProps } from 'formik';

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
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur
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
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
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
