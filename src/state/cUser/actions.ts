import { action } from 'typesafe-actions';
import {
  CUser,
  CUserActionsTypes,
  PayloadRequest,
  CUserRequestAction,
  CUserSuccessAction,
  CUserFailedAction
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

export default {
  loginRequest,
  loginSuccess,
  loginFailed
};
