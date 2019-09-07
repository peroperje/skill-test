import React from 'react';

import { Box } from '../../UI';
import ISLogged from '../../utils/HoC/ISLogged';
import UploadFile from './UploadFile';
import FilesList from './FilesList';

const Files: React.FC = (): JSX.Element => {
  return (
    <Box flexDirection="column">
      <ISLogged>
        {(isLogged): boolean | React.ReactNode => {
          return isLogged && <UploadFile />;
        }}
      </ISLogged>
      <FilesList />
    </Box>
  );
};

export default Files;
