import request from '../../utils/service/request';
import { FileItem } from './types';

export const url = '/files';

export const fetchFiles = (): Promise<FileItem[]> => {
  return request({
    url,
    method: 'get'
  })
    .then(r => r.data)
    .catch(e => {
      throw new Error(e.response.data);
    });
};

export const uploadFile = (data: { file: File }): Promise<FileItem> => {
  return request({
    url,
    method: 'post',
    data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
    .then(r => r.data)
    .catch(e => {
      throw new Error(e.response.data);
    });
};

export const deleteFile = (id: number): Promise<{}> => {
  return request({
    url: `${url}/${id}`,
    method: 'delete'
  })
    .then()
    .catch();
};
