import { SagaIterator } from 'redux-saga';
import { takeLatest, takeEvery } from 'redux-saga/effects';

import { FilesActionTypes } from './types';

export function* fetch() {
  yield {};
}
export function* upload() {
  yield {};
}
export function* deleteFile() {
  yield {};
}
export default function* watchFile(): SagaIterator {
  yield takeLatest(FilesActionTypes.FETCH_FILES_REQUEST, fetch);
  yield takeEvery(FilesActionTypes.UPLOAD_FILE_REQUEST, upload);
  yield takeEvery(FilesActionTypes.DELETE_FILE_REQUEST, deleteFile);
}
