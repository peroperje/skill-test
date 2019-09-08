import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { JsonToTable } from 'react-json-table';

import request from '../../../../../utils/service/request';

import {
  Modal as ModalMUI,
  makeStyles,
  createStyles,
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
      padding: theme.spacing(2, 4, 3)
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
        })
        .catch(e => {
          setError(e.message);
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
  return (
    <ModalMUI open={open} onClose={handleClose}>
      <div className={modalStyle.paper}>
        <JsonToTable json={data} />
      </div>
    </ModalMUI>
  );
};

export default Modal;
