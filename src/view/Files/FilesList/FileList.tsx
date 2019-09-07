import React from 'react';
import { FileListProps } from './types';
import ActionsBtns from './ActionsBtns/ActionsBtns';

const FilesList: React.FC<FileListProps> = ({
  files
}: FileListProps): JSX.Element => {
  const isFileArrEmpty = files.length === 0;
  return (
    <>
      {isFileArrEmpty && 'No files'}
      {!isFileArrEmpty && (
        <div className="Flex-column" style={{ width: '600px' }}>
          <div className="Flex-row">
            <div>File name</div>
            <div>Uploaded on</div>
            <div>Action</div>
          </div>
          {files.map(({ id, name, updateAt, download }) => {
            return (
              <div key={id} className="Flex-row">
                <div>{name}</div>
                <div>{updateAt}</div>
                <ActionsBtns id={id} download={download} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FilesList;
