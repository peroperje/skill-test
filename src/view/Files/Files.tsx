import React from 'react';

import ISLogged from '../../utils/HoC/ISLogged';
import UploadFile from './UploadFile';
import FilesList from './FilesList';

const Files: React.FC = (): JSX.Element => {
  return (
    <div className="Flex-column">
      <ISLogged>
        {(isLogged): boolean | React.ReactNode => {
          return isLogged && <UploadFile />;
        }}
      </ISLogged>
      <FilesList />
    </div>
  );
};

export default Files;
