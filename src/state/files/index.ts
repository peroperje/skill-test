import { Reducer } from 'redux';
import reduceReducers from 'reduce-reducers';

import {
  FileState,
  FilesActionTypes,
  FileStatePropById,
  FileItem
} from './types';

const normalizeState = (data: FileItem[]): FileStatePropById => {
  return data.reduce((acc: FileStatePropById, item: FileItem) => {
    return {
      ...acc,
      ...{
        [item.id]: item
      }
    };
  }, {});
};

const removePropFromObj = (
  byId: FileStatePropById,
  id: number
): FileStatePropById => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [id]: removedProp, ...rest } = byId;
  return rest;
};

export const INIT_STATE: FileState = {
  allId: [],
  byId: {},
  fetching: false,
  fetchError: '',
  uploading: false,
  uploadingError: '',
  deleting: false,
  deleteError: ''
};

const fetch: Reducer<FileState> = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FilesActionTypes.FETCH_FILES_REQUEST:
      return {
        ...state,
        ...{
          fetching: true,
          fetchError: ''
        }
      };
    case FilesActionTypes.FETCH_FILES_SUCCESS:
      return {
        ...state,
        ...{
          fetching: false,
          byId: {
            ...state.byId,
            ...normalizeState(payload)
          },
          allId: [...state.allId, ...payload.map((i: FileItem): number => i.id)]
        }
      };
    case FilesActionTypes.FETCH_FILES_FAILED:
      return {
        ...state,
        ...{
          fetching: false,
          fetchError: payload
        }
      };
    default:
      return state;
  }
};
const upload: Reducer<FileState> = (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FilesActionTypes.UPLOAD_FILE_REQUEST:
      return {
        ...state,
        ...{
          uploading: true,
          uploadingError: ''
        }
      };
    case FilesActionTypes.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        ...{
          uploading: false,
          byId: {
            ...state.byId,
            ...{
              [payload.id]: payload
            }
          },
          allId: [...state.allId, ...[payload.id]]
        }
      };
    case FilesActionTypes.UPLOAD_FILE_FAILED:
      return {
        ...state,
        ...{
          uploading: false,
          uploadingError: payload
        }
      };
    default:
      return state;
  }
};
const deleteFile: Reducer<FileState> = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FilesActionTypes.DELETE_FILE_REQUEST:
      return {
        ...state,
        ...{
          deleting: true,
          deleteError: ''
        }
      };
    case FilesActionTypes.DELETE_FILE_SUCCESS:
      return {
        ...state,
        ...{
          byId: removePropFromObj(state.byId, payload),
          deleting: false,
          allId: state.allId.filter(id => id !== payload)
        }
      };
    case FilesActionTypes.DELETE_FILE_FAILED:
      return {
        ...state,
        ...{
          deleting: false,
          deleteError: payload
        }
      };
    default:
      return state;
  }
};

const reducer: Reducer<FileState> = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FilesActionTypes.FETCH_FILES_REQUEST:
      return {
        ...state,
        ...{
          fetching: true,
          fetchError: ''
        }
      };
    case FilesActionTypes.FETCH_FILES_SUCCESS:
      return {
        ...state,
        ...{
          fetching: false,
          byId: {
            ...state.byId,
            ...normalizeState(payload)
          },
          allId: [...state.allId, ...payload.map((i: FileItem): number => i.id)]
        }
      };
    case FilesActionTypes.FETCH_FILES_FAILED:
      return {
        ...state,
        ...{
          fetching: false,
          fetchError: payload
        }
      };

    case FilesActionTypes.UPLOAD_FILE_REQUEST:
      return {
        ...state,
        ...{
          uploading: true,
          uploadingError: ''
        }
      };
    case FilesActionTypes.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        ...{
          uploading: false,
          byId: {
            ...state.byId,
            ...{
              [payload.id]: payload
            }
          },
          allId: [...state.allId, ...[payload.id]]
        }
      };
    case FilesActionTypes.UPLOAD_FILE_FAILED:
      return {
        ...state,
        ...{
          uploading: false,
          uploadingError: payload
        }
      };

    case FilesActionTypes.DELETE_FILE_REQUEST:
      return {
        ...state,
        ...{
          deleting: true,
          deleteError: ''
        }
      };
    case FilesActionTypes.DELETE_FILE_SUCCESS:
      return {
        ...state,
        ...{
          byId: {
            ...state.byId,
            ...removePropFromObj(state.byId, payload)
          },
          deleting: false,
          allId: state.allId.filter(id => id !== payload)
        }
      };
    case FilesActionTypes.DELETE_FILE_FAILED:
      return {
        ...state,
        ...{
          deleting: false,
          deleteError: payload
        }
      };

    default:
      return state;
  }
};

const sReducer = reduceReducers(INIT_STATE, fetch, upload, deleteFile);
export default sReducer as Reducer<FileState>;
//export default reducer;
