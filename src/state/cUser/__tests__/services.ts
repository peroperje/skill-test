jest.mock('../../../utils/service/request');
import { login } from '../services';
import { PayloadRequest } from '../types';

describe('cUser Services', () => {
  describe('login', () => {
    it('should have proper options', done => {
      const data: PayloadRequest = {
        email: 'some@ptt.yu',
        password: '454646'
      };
      login(data).then(res => {
        expect(res).toEqual({
          url: '/login',
          method: 'post',
          data: data
        });
        done();
      });
    });
  });
});
