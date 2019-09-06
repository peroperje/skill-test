import {
  uploadFileRequest,
  uploadFileSuccess,
  uploadFilesFailed
} from '../../actions';
import uploadReducer from '../upload';
import { INIT_STATE } from '../initialState';
import { FileItem, FileState } from '../../types';

const createStore = (obj: Partial<FileState>): FileState => {
  return {
    ...INIT_STATE,
    ...obj
  };
};

describe('Upload Reducer', () => {
  it('should have proper state after emitted upload request action', () => {
    const oldState = createStore({ uploadingError: 'old error' });
    const file: File = {
      name: 'some.csv',
      size: 464546,
      type: 'text/csv',
      lastModified: 46546465
    } as File;
    const action = uploadFileRequest({ file });
    const state = uploadReducer(oldState, action);
    const expectedState = {
      ...oldState,
      ...{
        uploading: true,
        uploadingError: ''
      }
    };
    expect(state).toEqual(expectedState);
  });
  it('should have proper state after emitted upload success action', () => {
    const oldState = createStore({ uploading: true });
    const data: FileItem = {
      id: 1,
      name: 'some.csv',
      updateAt: 446546,
      download: 'shfdskk'
    };
    const action = uploadFileSuccess(data);
    const state = uploadReducer(oldState, action);
    const expectedState = {
      ...oldState,
      ...{
        uploading: false,
        byId: {
          ...oldState.byId,
          ...{
            [data.id]: data
          }
        },
        allId: [...oldState.allId, ...[data.id]]
      }
    };
    expect(state).toEqual(expectedState);
  });
  it('should have proper state after emitted upload failed action', () => {
    const oldState = createStore({ uploading: true });
    const err = 'some error';
    const action = uploadFilesFailed(err);
    const state = uploadReducer(oldState, action);
    const expectedState = {
      ...oldState,
      ...{
        uploading: false,
        uploadingError: err
      }
    };
    expect(state).toEqual(expectedState);
  });
});
