import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';

import {
  CUserActionsTypes,
  CUserRequestAction,
  CUserServiceSuccessResponse
} from './types';
import { login as loginService } from './services';
import { loginSuccess, loginFailed } from './actions';
import jwtStorage from '../../utils/localStorage';

export function* login({ payload }: CUserRequestAction): SagaIterator {
  try {
    const res: unknown = yield call(loginService, payload);
    const { user, accessToken } = res as CUserServiceSuccessResponse;
    yield put(loginSuccess(user));
    yield call(jwtStorage.set, { email: user.email, token: accessToken });
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}
export function* logout(): SagaIterator {
  yield call(jwtStorage.remove);
}

export default function* watchCUser(): SagaIterator {
  yield takeLatest(CUserActionsTypes.LOGIN_REQUEST, login);
  yield takeLatest(CUserActionsTypes.LOGOUT, logout);
}
