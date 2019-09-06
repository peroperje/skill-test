import { FileState, FileItem } from '../../types';
import {
  fetchFilesRequest,
  fetchFilesSuccess,
  fetchFilesFailed
} from '../../actions';
import fetchReducer, { normalizeState } from '../fetch';
import { INIT_STATE } from '../initialState';

export const createState = (obj: Partial<FileState>): FileState => {
  return {
    ...INIT_STATE,
    ...obj
  };
};

describe('Fetch Reducer', () => {
  it('should have proper state after emitted fetch request', () => {
    const oldState = createState({ fetchError: 'old error' });
    const action = fetchFilesRequest();
    const state = fetchReducer(oldState, action);
    const expectedState = {
      ...INIT_STATE,
      ...{
        fetching: true,
        fetchError: ''
      }
    };
    expect(state).toEqual(expectedState);
  });

  it('should have proper state after emitted action fetch success', () => {
    const oldState = createState({ fetching: true });
    const data: FileItem[] = [
      {
        id: 1,
        name: 'some.csv',
        download: '/download/',
        updateAt: 4645646
      }
    ];
    const fetchedAt = new Date().getTime();
    const action = fetchFilesSuccess(data, fetchedAt);
    const state = fetchReducer(oldState, action);
    const expectedState = {
      ...oldState,
      ...{
        fetching: false,
        fetchedAt,
        byId: normalizeState(data),
        allId: [...oldState.allId, ...data.map((i: FileItem): number => i.id)]
      }
    };
    expect(state).toEqual(expectedState);
  });
  it('should have proper state after emitted fetch failed action', () => {
    const oldState = createState({ fetching: true });
    const err = 'some error';
    const action = fetchFilesFailed(err);
    const state = fetchReducer(oldState, action);
    const expectedState = {
      ...oldState,
      ...{
        fetching: false,
        fetchError: err
      }
    };
    expect(state).toEqual(expectedState);
  });
});
