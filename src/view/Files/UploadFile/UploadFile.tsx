import React from 'react';
import { Formik, FormikProps } from 'formik';

import {
  Box,
  Button,
  Typography,
  CloudUploadIcon,
  makeStyles,
  createStyles,
  Theme
} from '../../../UI';
import validationSchema from './validation';
import { SubmitDispatch } from './types';
export interface FormValues {
  files: FileList | null;
}

const initialValues: FormValues = {
  files: null
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: 'none'
    }
  })
);

const UploadFile: React.FC<SubmitDispatch> = ({
  submit
}: SubmitDispatch): JSX.Element => {
  const classes = useStyles();
  return (
    <Formik
      onSubmit={(values: FormValues): void => {
        submit(values.files as FileList);
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        handleBlur,
        handleSubmit,
        setFieldValue,
        errors,
        touched,
        values,
        setFieldTouched,
        isValid,
        resetForm
      }: FormikProps<FormValues>): JSX.Element => {
        const isFileSelected =
          values.files !== null && values.files && values.files[0];

        return (
          <Box display="flex" justifyContent="center" pb={3}>
            <form
              onSubmit={(values): void => {
                handleSubmit(values);
                setTimeout(resetForm, 0);
              }}
            >
              <input
                id="file-upload-btn"
                className={classes.input}
                name="files"
                type="file"
                onChange={(e): void => {
                  setFieldValue('files', e.currentTarget.files);
                  setFieldTouched('files');
                }}
                onBlur={handleBlur}
              />
              <label htmlFor="file-upload-btn">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.button}
                >
                  {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
                  {isFileSelected ? values.files![0].name : 'Select a file'}
                </Button>
              </label>

              <Button variant="contained" type="submit" disabled={!isValid}>
                <CloudUploadIcon />
              </Button>

              {errors.files && touched.files && (
                <Typography align="center" color="error">
                  {errors.files}
                </Typography>
              )}
            </form>
          </Box>
        );
      }}
    </Formik>
  );
};

export default UploadFile;
