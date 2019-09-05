import axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios';

import jwt from '../localStorage';
import { baseUrl } from '../config';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: baseUrl
});

/**
 * @description Request Wrapper with default success/error actions
 * @param {Object} options app call settings
 * @return {Promise}
 */
const request = function(options: AxiosRequestConfig): AxiosPromise {
  const onSuccess = function(response: AxiosResponse): AxiosResponse {
    return response;
  };

  const onError = function(error: AxiosResponse): Promise<AxiosResponse> {
    return Promise.reject(error);
  };

  if (jwt.exists()) {
    const { token } = jwt.get();
    client.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
