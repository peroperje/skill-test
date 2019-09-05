import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import cUser from './cUser/sagas';

export default function* root(): SagaIterator {
  yield all([fork(cUser)]);
}
