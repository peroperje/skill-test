import React from 'react';
import { Formik, FormikProps } from 'formik';

import validationSchema from './validation';
import { SubmitDispatch } from './types';
export interface FormValues {
  files: FileList | null;
}

const initialValues: FormValues = {
  files: null
};

const UploadFile: React.FC<SubmitDispatch> = ({
  submit
}: SubmitDispatch): JSX.Element => {
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
        touched
      }: FormikProps<FormValues>): JSX.Element => {
        return (
          <form onSubmit={handleSubmit}>
            <input
              id="files"
              name="files"
              type="file"
              onChange={(e): void => {
                setFieldValue('files', e.currentTarget.files);
              }}
              onBlur={handleBlur}
            />
            {errors.files && touched.files && <div>{errors.files}</div>}
            <button type="submit">Upload</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default UploadFile;
