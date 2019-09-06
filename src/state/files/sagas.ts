import { SagaIterator } from 'redux-saga';
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { PayloadAction, TypeConstant } from 'typesafe-actions';

import { FilesActionTypes, FileItem } from './types';
import {
  fetchFiles as fetchFilesService,
  uploadFile as uploadFileService,
  deleteFile as deleteFileService
} from './services';
import {
  fetchFilesSuccess,
  fetchFilesFailed,
  uploadFileSuccess,
  uploadFilesFailed,
  deleteFileSuccess,
  deleteFileFailed
} from './actions';

export const getNow = (): number => new Date().getTime();

export function* fetch(): SagaIterator {
  try {
    const data: unknown = yield call(fetchFilesService);
    const fetchedAt: unknown = yield call(getNow);
    yield put(fetchFilesSuccess(data as FileItem[], fetchedAt as number));
  } catch (e) {
    yield put(fetchFilesFailed(e.message));
  }
}
export function* upload(
  action: PayloadAction<TypeConstant, { file: File }>
): SagaIterator {
  try {
    const { payload } = action;
    const res: unknown = yield call(uploadFileService, payload);
    yield put(uploadFileSuccess(res as FileItem));
  } catch (e) {
    yield put(uploadFilesFailed(e.message));
  }
}
export function* deleteFile(
  action: PayloadAction<TypeConstant, number>
): SagaIterator {
  try {
    const { payload } = action;
    yield call(deleteFileService, payload);
    yield put(deleteFileSuccess(payload));
  } catch (e) {
    yield put(deleteFileFailed(e.message));
  }
}
export default function* watchFile(): SagaIterator {
  yield takeLatest(FilesActionTypes.FETCH_FILES_REQUEST, fetch);
  yield takeEvery(FilesActionTypes.UPLOAD_FILE_REQUEST, upload);
  yield takeEvery(FilesActionTypes.DELETE_FILE_REQUEST, deleteFile);
}
