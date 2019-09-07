import React from 'react';
import { Formik, FormikProps } from 'formik';

import { ActionsProp } from './types';
import validationSchema from './validation';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  makeStyles,
  createStyles,
  Theme
} from '../../UI';

export interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: ''
};

const useStyle = makeStyles((theme: Theme) => {
  return createStyles({
    rootContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textForm: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  });
});

const Login: React.FC<ActionsProp> = ({ submit }: ActionsProp): JSX.Element => {
  const classes = useStyle();
  return (
    <Formik
      onSubmit={(values: FormValues): void => {
        submit(values);
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
            <Container className={classes.rootContainer}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="30%"
                mt={5}
              >
                <Typography variant="h5">Login</Typography>
                <TextField
                  className={classes.textForm}
                  variant="outlined"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                  error={!!(errors.email && touched.email)}
                  label={errors.email}
                  required
                  fullWidth
                />

                <TextField
                  className={classes.textForm}
                  variant="outlined"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                  error={!!(errors.password && touched.password)}
                  label={errors.password}
                  required
                  fullWidth
                />

                <Button fullWidth variant="contained" type="submit">
                  Login
                </Button>
              </Box>
            </Container>
          </form>
        );
      }}
    </Formik>
  );
};

export default Login;
