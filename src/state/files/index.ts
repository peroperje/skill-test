import { Reducer } from 'redux';
import {
  FileState,
  FilesActionTypes,
  FileStatePropById,
  FileItem
} from './types';

export const INIT_STATE: FileState = {
  allId: [],
  byId: {},
  fetching: false,
  fetchError: '',
  updating: false,
  updateError: '',
  deleting: false,
  deleteError: ''
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
          byId: payload.reduce((acc: FileStatePropById, item: FileItem) => {
            return {
              ...acc,
              ...{
                [item.id]: item
              }
            };
          }, {})
        }
      };
    default:
      return state;
  }
};

export default reducer;
