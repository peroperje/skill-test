import React from 'react';
import { FileListProps } from './types';

import { Table, TableRow, TableHead, TableCell, TableBody } from '../../../UI';

import ActionsBtns from './ActionsBtns/ActionsBtns';

const FilesList: React.FC<FileListProps> = ({
  files
}: FileListProps): JSX.Element => {
  return (
    <>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell>Upload On</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map(({ id, name, updateAt, download }) => {
            return (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{updateAt}</TableCell>
                <TableCell>
                  <ActionsBtns id={id} download={download} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default FilesList;
