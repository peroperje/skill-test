import React from 'react';

import { LinearProgress, CircularProgress, Box } from '../../../UI';
import { StateProps } from './types';

const Progress: React.FC<StateProps> = ({
  showLineProgress,
  showCircularProgress
}: StateProps): JSX.Element => {
  return (
    <>
      {showLineProgress && <LinearProgress color="secondary" />}
      {showCircularProgress && (
        <Box mt={10} display="flex" justifyContent="center" alignItems="center">
          <CircularProgress color="primary" />
        </Box>
      )}
    </>
  );
};

export default Progress;
