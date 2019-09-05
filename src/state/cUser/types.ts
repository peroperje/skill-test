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

interface Payload {
  data?: CUser;
}

export type CUserActions = PayloadAction<TypeConstant, Payload>;
