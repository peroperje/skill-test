import { PayloadAction, TypeConstant } from 'typesafe-actions';
export enum CUserActionsTypes {
  LOGIN_REQUEST = '@cUser/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@cUser/LOGIN_SUCCESS',
  LOGIN_FAILED = '@cUser/LOGIN_FAILED'
}

export interface CUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CUserState {
  data: CUser;
  fetching: boolean;
  error: string;
}

export interface PayloadRequest {
  email: string;
  password: string;
}

export type CUserRequestAction = PayloadAction<TypeConstant, PayloadRequest>;
export type CUserSuccessAction = PayloadAction<TypeConstant, CUser>;
export type CUserFailedAction = PayloadAction<TypeConstant, string>;
