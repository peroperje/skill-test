import React from 'react';
import { FileListProps } from './types';

import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Typography,
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
  files,
  isFetching
}: FileListProps): JSX.Element => {
  const classes = useStyle();
  const isFilesEmpty = files.length === 0;
  return (
    <div className={classes.tableWrapper}>
      {!isFilesEmpty && (
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
      )}
      {!isFetching && isFilesEmpty && (
        <Typography variant="h4" align="center">
          There are no files
        </Typography>
      )}
    </div>
  );
};

export default FilesList;
