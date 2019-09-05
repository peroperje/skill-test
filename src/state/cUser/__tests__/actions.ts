import { loginRequest, loginSuccess, loginFailed, logout } from '../actions';
import { CUserActionsTypes, CUser } from '../types';

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
      const userData: CUser = {
        id: 1,
        email: 'petar@ptt.yu',
        firstName: 'someFirstName',
        lastName: 'someLastName'
      };
      const action = loginSuccess(userData);
      expect(action).toEqual({
        type: CUserActionsTypes.LOGIN_SUCCESS,
        payload: { ...userData }
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

  describe('logout', () => {
    const action = logout();
    expect(action).toEqual({
      type: CUserActionsTypes.LOGOUT
    });
  });
});
