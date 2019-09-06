import { Reducer } from 'redux';
import { FilesActionTypes, FileState, FileStatePropById } from '../types';
import { INIT_STATE } from './initialState';

export const removePropFromObj = (
  byId: FileStatePropById,
  id: number
): FileStatePropById => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [id]: removedProp, ...rest } = byId;
  return rest;
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

export default deleteFile;
