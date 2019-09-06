import { OutputSelector } from 'reselect';
import { INIT_STATE } from '../reducers/initialState';
import { FileState, FileItem, FileStatePropById } from '../types';
import {
  getFiles,
  isFetching,
  getFetchingErr,
  isDeleting,
  getDelletingErr,
  isUploading,
  getUpoadingErr
} from '../selectors';
import { ApplicationState } from '../../index';

type OutSelector<T> = OutputSelector<ApplicationState, T, (x: FileState) => T>;

const createState = (obj: Partial<FileState>): FileState => {
  return {
    ...INIT_STATE,
    ...obj
  };
};

const filesSample: FileItem = {
  id: 1,
  name: 'some.csv',
  download: '4545-some.csv',
  updateAt: 78945464
};

describe('Files Selectors', () => {
  describe('getFiles', () => {
    const selector = getFiles as OutSelector<FileItem[]>;
    it('should return empty array', () => {
      const state = createState({});
      const data = selector.resultFunc(state);
      expect(data).toEqual([]);
    });
    it('should return proper array', () => {
      const state = createState({
        byId: {
          [filesSample.id]: filesSample
        },
        allId: [filesSample.id]
      });
      const data = selector.resultFunc(state);
      expect(data).toEqual([filesSample]);
    });
  });
});
