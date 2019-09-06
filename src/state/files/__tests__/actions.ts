import {
  deleteFileFailed,
  deleteFileRequest,
  deleteFileSuccess,
  fetchFilesFailed,
  fetchFilesRequest,
  fetchFilesSuccess,
  uploadFileRequest,
  uploadFilesFailed,
  uploadFileSuccess
} from '../actions';
import { FilesActionTypes, FileItem } from '../types';

const FileItemSample = {
  id: 1,
  name: 'someName',
  updateAt: 488993565,
  download: '/somePath/someFile.csv'
};

describe('Files Action', () => {
  describe('Fetch', () => {
    it('fetchFilesRequest', () => {
      expect(fetchFilesRequest()).toEqual({
        type: FilesActionTypes.FETCH_FILES_REQUEST
      });
    });

    it('fetchFilesSuccess', () => {
      const data: FileItem[] = [{ ...FileItemSample }];
      const fetchedAt = new Date().getTime();
      expect(fetchFilesSuccess(data, fetchedAt)).toEqual({
        type: FilesActionTypes.FETCH_FILES_SUCCESS,
        payload: {
          data,
          fetchedAt
        }
      });
    });

    it('fetchFilesFailed', () => {
      const error = 'some error message';
      expect(fetchFilesFailed(error)).toEqual({
        type: FilesActionTypes.FETCH_FILES_FAILED,
        payload: error
      });
    });
  });
  describe('Upload', () => {
    it('uploadFileRequest', () => {
      const file = new FormData();

      expect(uploadFileRequest(file)).toEqual({
        type: FilesActionTypes.UPLOAD_FILE_REQUEST,
        payload: file
      });
    });

    it('uploadFileSuccess', () => {
      const data: FileItem = FileItemSample;
      expect(uploadFileSuccess(data)).toEqual({
        type: FilesActionTypes.UPLOAD_FILE_SUCCESS,
        payload: data
      });
    });

    it('uploadFilesFailed', () => {
      const err = ' some error';
      expect(uploadFilesFailed(err)).toEqual({
        type: FilesActionTypes.UPLOAD_FILE_FAILED,
        payload: err
      });
    });
  });

  describe('Delete', () => {
    it('deleteFileRequest', () => {
      expect(deleteFileRequest(1)).toEqual({
        type: FilesActionTypes.DELETE_FILE_REQUEST,
        payload: 1
      });
    });

    it('deleteFileSuccess', () => {
      expect(deleteFileSuccess(1)).toEqual({
        type: FilesActionTypes.DELETE_FILE_SUCCESS,
        payload: 1
      });
    });

    it('deleteFileFailed', () => {
      const err = 'error message';
      expect(deleteFileFailed(err)).toEqual({
        type: FilesActionTypes.DELETE_FILE_FAILED,
        payload: err
      });
    });
  });
});
