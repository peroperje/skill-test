import { AxiosRequestConfig } from 'axios';
const request = (opt: AxiosRequestConfig): Promise<AxiosRequestConfig> =>
  new Promise((resolve): void => {
    // eslint-disable-next-line no-undef
    process.nextTick(() => {
      const response = {
        data: opt
      };
      resolve(response);
    });
  });

export default request;
