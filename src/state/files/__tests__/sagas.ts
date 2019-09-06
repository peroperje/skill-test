import { testSaga } from 'redux-saga-test-plan';
import watchFile, { fetch, deleteFile, upload } from '../sagas';
import { FilesActionTypes } from '../types';

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
});
