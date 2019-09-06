import deleteReducer from '../delete';
import {
  deleteFileRequest,
  deleteFileSuccess,
  deleteFileFailed
} from '../../actions';
import { INIT_STATE } from '../initialState';
import { FileState } from '../../types';

export const createState = (obj: Partial<FileState>): FileState => {
  return {
    ...INIT_STATE,
    ...obj
  };
};

describe('Delete Reducer', () => {
  it('should have proper state after emitted delete request', () => {
    const oldState = createState({ deleteError: 'old error' });
    const id = 1;
    const action = deleteFileRequest(id);
    const state = deleteReducer(oldState, action);
    const expectedState = {
      ...oldState,
      ...{
        deleting: true,
        deleteError: ''
      }
    };
    expect(state).toEqual(expectedState);
  });
  it('should have proper state after emitted delete success action', () => {
    const id = 1;
    const oldState = createState({
      deleting: true,
      allId: [1],
      byId: {
        1: {
          id: 1,
          name: 'some.csv',
          download: '799-some.csv',
          updateAt: 4665645
        }
      }
    });
    const action = deleteFileSuccess(id);
    const state = deleteReducer(oldState, action);
    expect(state).toEqual(INIT_STATE);
  });

  it('should have proper state after emitted delete failed action', () => {
    const oldState = createState({ deleting: true });
    const err = 'some error';
    const action = deleteFileFailed(err);
    const state = deleteReducer(oldState, action);
    const expectedState = {
      ...oldState,
      ...{
        deleting: false,
        deleteError: err
      }
    };
    expect(state).toEqual(expectedState);
  });
});
