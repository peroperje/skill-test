import { SagaIterator } from 'redux-saga';
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

import { FilesActionTypes, FileItem } from './types';
import { fetchFiles as fetchFilesService } from './services';
import { fetchFilesSuccess, fetchFilesFailed } from './actions';

export function* fetch(): SagaIterator {
  try {
    const res: unknown = yield call(fetchFilesService);
    yield put(fetchFilesSuccess(res as FileItem[]));
  } catch (e) {
    yield put(fetchFilesFailed(e.message));
  }
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
