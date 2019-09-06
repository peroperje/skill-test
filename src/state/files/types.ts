import index from '../../utils/localStorage';

export enum FilesActionTypes {
  FETCH_FILES_REQUEST = '@files/FETCH_FILES_REQUEST',
  FETCH_FILES_SUCCESS = '@files/FETCH_FILES_SUCCESS',
  FETCH_FILES_FAILED = '@files/FETCH_FILES_FAILED',

  UPLOAD_FILE_REQUEST = '@files/UPLOAD_FILE_REQUEST',
  UPLOAD_FILE_SUCCESS = '@files/UPLOAD_FILE_SUCCESS',
  UPLOAD_FILE_FAILED = '@files/UPLOAD_FILE_FAILED',

  DELETE_FILE_REQUEST = '@files/DELETE_FILE_REQUEST',
  DELETE_FILE_SUCCESS = '@files/DELETE_FILE_SUCCESS',
  DELETE_FILE_FAILED = '@files/DELETE_FILE_FAILED'
}

export interface FileItem {
  id: number;
  name: string;
  updateAt: number;
  download: string;
}

export interface FileStatePropById {
  [index: number]: FileItem;
}

export interface FileState {
  fetching: boolean;
  fetchError: string;
  updating: boolean;
  updateError: string;
  deleting: boolean;
  deleteError: string;
  byId: FileStatePropById;
  allId: number[];
}
