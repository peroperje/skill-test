import { loginRequest, loginSuccess, loginFailed } from '../actions';
import { CUserActionsTypes } from '../types';

describe('cUser Actions', () => {
  describe('loginRequest', () => {
    it('should be defined', () => {
      expect(loginRequest).toBeDefined();
    });

    it('should create proper action object', () => {
      const loginData = { email: 'petar@ptt.yu', password: 'hehdhaka' };
      const action = loginRequest(loginData);
      expect(action).toEqual({
        type: CUserActionsTypes.LOGIN_REQUEST,
        payload: { ...loginData }
      });
    });
  });

  describe('loginSuccess', () => {
    it('should be defined', () => {
      expect(loginSuccess).toBeDefined();
    });

    it('should create proper action object', () => {
      const cUserData = {
        id: 1,
        email: 'petar@ptt.yu',
        firstName: 'someFirstName',
        lastName: 'someLastName'
      };
      const action = loginSuccess(cUserData);
      expect(action).toEqual({
        type: CUserActionsTypes.LOGIN_SUCCESS,
        payload: { ...cUserData }
      });
    });
  });

  describe('loginFailed', () => {
    it('should be defined', () => {
      expect(loginFailed).toBeDefined();
    });

    it('should create proper action object', () => {
      const error = 'error from server';
      const action = loginFailed(error);
      expect(action).toEqual({
        type: CUserActionsTypes.LOGIN_FAILED,
        payload: error
      });
    });
  });
});
