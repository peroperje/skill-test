import React, { useEffect, useState } from 'react';
import request from '../../../../../utils/service/request';

import {
  Modal as ModalMUI,
  makeStyles,
  createStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  CircularProgress,
  Typography,
  Theme
} from '../../../../../UI';

import { ModalProps } from './types';
import { PropsId } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 750,
      top: '5%',
      left: '20%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      minHeight: 300
    }
  })
);

export interface ResponseData {
  [i: string]: string;
}

export interface UseRequest {
  loading: boolean;
  error: string;
  data: ResponseData[];
}

export const useRequest = (id: number, open: boolean): UseRequest => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    if (open) {
      setLoading(true);
      request({
        url: `/read/${id}`,
        method: 'get'
      })
        .then(r => {
          setData(r.data);
          setLoading(false);
        })
        .catch(e => {
          setError(e.message);
          setLoading(false);
        });
    }
    return (): void => {
      setError('');
      setData([]);
      setLoading(false);
    };
  }, [id, open]);
  return { loading, error, data };
};

const Modal: React.FC<ModalProps & PropsId> = ({
  id,
  handleClose,
  open
}: ModalProps & PropsId): JSX.Element => {
  const modalStyle = useStyles();
  const { data, error, loading } = useRequest(id, open);
  const isDataEmpty = !!data.length;
  const tableKeys = isDataEmpty ? Object.keys(data[0]) : [];
  return (
    <ModalMUI open={open} onClose={handleClose}>
      <div className={modalStyle.paper}>
        {!!error && <Typography color="error">{error}</Typography>}
        {isDataEmpty && (
          <Table>
            <TableHead>
              <TableRow>
                {tableKeys.map((k, i) => {
                  return <TableCell key={i}>{k}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((obj, index) => {
                return (
                  <TableRow key={index}>
                    {tableKeys.map((key, keyIndex) => {
                      return <TableCell key={keyIndex}>{obj[key]}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
        {loading && (
          <Box
            mt={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        )}
      </div>
    </ModalMUI>
  );
};

export default Modal;
