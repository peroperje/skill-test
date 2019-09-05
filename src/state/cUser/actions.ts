import { action, Action } from 'typesafe-actions';
import {
  CUserActionsTypes,
  PayloadRequest,
  CUserRequestAction,
  CUserSuccessAction,
  CUserFailedAction,
  CUser
} from './types';

export const loginRequest = (data: PayloadRequest): CUserRequestAction => {
  return action(CUserActionsTypes.LOGIN_REQUEST, data);
};

export const loginSuccess = (data: CUser): CUserSuccessAction => {
  return action(CUserActionsTypes.LOGIN_SUCCESS, data);
};

export const loginFailed = (error: string): CUserFailedAction => {
  return action(CUserActionsTypes.LOGIN_FAILED, error);
};

export const logout = (): Action => {
  return action(CUserActionsTypes.LOGOUT);
};
