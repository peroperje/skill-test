import { Reducer } from 'redux';
import { FilesActionTypes, FileState } from '../types';
import { INIT_STATE } from './initialState';

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

export default upload;
