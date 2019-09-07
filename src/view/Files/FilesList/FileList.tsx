import React from 'react';
import { FileListProps } from './types';

import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  createStyles,
  makeStyles
} from '../../../UI';

import ActionsBtns from './ActionsBtns/ActionsBtns';

const useStyle = makeStyles(() => {
  return createStyles({
    tableWrapper: {
      maxHeight: 407,
      overflow: 'auto'
    }
  });
});

const FilesList: React.FC<FileListProps> = ({
  files
}: FileListProps): JSX.Element => {
  const classes = useStyle();
  return (
    <div className={classes.tableWrapper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">File Name</TableCell>
            <TableCell align="center">Upload On</TableCell>
            <TableCell align="center"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map(({ id, name, updateAt, download }) => {
            return (
              <TableRow key={id}>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{updateAt}</TableCell>
                <TableCell align="center">
                  <ActionsBtns id={id} download={download} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default FilesList;
