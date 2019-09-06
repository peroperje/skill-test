import { Reducer } from 'redux';
import {
  FileItem,
  FilesActionTypes,
  FileState,
  FileStatePropById
} from '../types';
import { INIT_STATE } from './initialState';

export const normalizeState = (data: FileItem[]): FileStatePropById => {
  return data.reduce((acc: FileStatePropById, item: FileItem) => {
    return {
      ...acc,
      ...{
        [item.id]: item
      }
    };
  }, {});
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
          fetchedAt: payload.fetchedAt,
          byId: normalizeState(payload.data),
          allId: [
            ...state.allId,
            ...payload.data.map((i: FileItem): number => i.id)
          ]
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

export default fetch;
