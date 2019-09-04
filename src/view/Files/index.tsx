import React from 'react';

import UploadFile from './UploadFile';
import FilesList from './FilesList';

const Files: React.FC = (): JSX.Element => {
  return (
    <div className="Flex-column">
      <UploadFile />
      <FilesList />
    </div>
  );
};

export default Files;
