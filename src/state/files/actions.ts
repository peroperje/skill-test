import { action, Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import { FilesActionTypes, FileItem } from './types';

export const fetchFilesRequest = (): Action => {
  return action(FilesActionTypes.FETCH_FILES_REQUEST);
};

export const fetchFilesSuccess = (
  data: FileItem[]
): PayloadAction<TypeConstant, FileItem[]> => {
  return action(FilesActionTypes.FETCH_FILES_SUCCESS, data);
};

export const fetchFilesFailed = (
  error: string
): PayloadAction<TypeConstant, string> => {
  return action(FilesActionTypes.FETCH_FILES_FAILED, error);
};

export const uploadFileRequest = (data: {
  file: File;
}): PayloadAction<TypeConstant, { file: File }> => {
  return action(FilesActionTypes.UPLOAD_FILE_REQUEST, data);
};

export const uploadFileSuccess = (
  data: FileItem
): PayloadAction<TypeConstant, FileItem> => {
  return action(FilesActionTypes.UPLOAD_FILE_SUCCESS, data);
};

export const uploadFilesFailed = (
  error: string
): PayloadAction<TypeConstant, string> => {
  return action(FilesActionTypes.UPLOAD_FILE_FAILED, error);
};

export const deleteFileRequest = (
  id: number
): PayloadAction<TypeConstant, number> => {
  return action(FilesActionTypes.DELETE_FILE_REQUEST, id);
};

export const deleteFileSuccess = (
  id: number
): PayloadAction<TypeConstant, number> => {
  return action(FilesActionTypes.DELETE_FILE_SUCCESS, id);
};

export const deleteFileFailed = (
  error: string
): PayloadAction<TypeConstant, string> => {
  return action(FilesActionTypes.DELETE_FILE_FAILED, error);
};
