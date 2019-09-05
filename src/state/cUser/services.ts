import request from '../../utils/service/request';
import { PayloadRequest, CUserServiceSuccessResponse } from './types';

export const login = (
  data: PayloadRequest
): Promise<CUserServiceSuccessResponse> => {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data);
    });
};
