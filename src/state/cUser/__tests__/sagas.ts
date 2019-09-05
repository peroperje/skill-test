import { testSaga } from 'redux-saga-test-plan';
import jwtStorage from '../../../utils/localStorage';
import watchCUser, { login, logout } from '../sagas';
import { login as loginService } from '../services';
import { loginRequest, loginSuccess, loginFailed } from '../actions';
import {
  CUserActionsTypes,
  PayloadRequest,
  CUserServiceSuccessResponse
} from '../types';

describe('cUser Sagas', () => {
  it('watchCUser', () => {
    testSaga(watchCUser)
      .next()
      .takeLatest(CUserActionsTypes.LOGIN_REQUEST, login)
      .next()
      .takeLatest(CUserActionsTypes.LOGOUT, logout)
      .next()
      .isDone();
  });

  it('logout ', () => {
    testSaga(logout)
      .next()
      .call(jwtStorage.remove)
      .next()
      .isDone();
  });

  describe('login', () => {
    const data: PayloadRequest = {
      email: 'some@ptt.yu',
      password: '454654665'
    };
    const action = loginRequest(data);
    const user = {
      id: 1,
      firstName: 'somethin',
      lastName: 'somethin',
      email: data.email
    };
    it('login success', () => {
      const serverResponse: CUserServiceSuccessResponse = {
        accessToken: 'hjsdkhskjdhksd',
        user
      };
      testSaga(login, action)
        .next()
        .call(loginService, action.payload)
        .next(serverResponse)
        .put(loginSuccess(user))
        .next(serverResponse)
        .call(jwtStorage.set, {
          email: user.email,
          token: serverResponse.accessToken
        })
        .next()
        .isDone();
    });

    it('login failed', () => {
      const errMessage = 'User not found';
      const error = new Error(errMessage);
      testSaga(login, action)
        .next()
        .call(loginService, action.payload)
        .throw(error)
        .put(loginFailed(errMessage))
        .next()
        .isDone();
    });
  });
});
