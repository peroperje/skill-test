import { testSaga } from 'redux-saga-test-plan';
import watchFile, { fetch, deleteFile, upload } from '../sagas';
import { FileItem, FilesActionTypes } from '../types';
import {
  fetchFiles as fetchService,
  uploadFile as uploadService,
  deleteFile as deleService
} from '../services';
import {
  fetchFilesSuccess,
  fetchFilesFailed,
  deleteFileSuccess,
  deleteFileFailed,
  uploadFileRequest,
  uploadFileSuccess,
  uploadFilesFailed
} from '../actions';

describe('File Sagas', () => {
  it('watchFile', () => {
    testSaga(watchFile)
      .next()
      .takeLatest(FilesActionTypes.FETCH_FILES_REQUEST, fetch)
      .next()
      .takeEvery(FilesActionTypes.UPLOAD_FILE_REQUEST, upload)
      .next()
      .takeEvery(FilesActionTypes.DELETE_FILE_REQUEST, deleteFile)
      .next()
      .isDone();
  });
  describe('fetch', () => {
    it('success', () => {
      const data = [] as FileItem[];
      testSaga(fetch)
        .next()
        .call(fetchService)
        .next(data)
        .put(fetchFilesSuccess(data))
        .next()
        .isDone();
    });
    it('failed', () => {
      const err = new Error('error message');
      testSaga(fetch)
        .next()
        .call(fetchService)
        .throw(err)
        .put(fetchFilesFailed(err.message))
        .next()
        .isDone();
    });
  });
  describe('upload', () => {
    const payload = { file: {} } as { file: File };
    const data = {} as FileItem;
    const action = uploadFileRequest(payload);
    it('success', () => {
      testSaga(upload, action)
        .next()
        .call(uploadService, action.payload)
        .next(data)
        .put(uploadFileSuccess(data))
        .next()
        .isDone();
    });
    it('failed', () => {
      const err = new Error('error message');
      testSaga(upload, action)
        .next()
        .call(uploadService, action.payload)
        .throw(err)
        .put(uploadFilesFailed(err.message))
        .next()
        .isDone();
    });
  });
});
