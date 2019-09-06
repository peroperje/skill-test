import { OutputSelector } from 'reselect';
import { INIT_STATE } from '../reducers/initialState';
import { FileState, FileItem } from '../types';
import {
  getFiles,
  isFetching,
  getFetchErr,
  isDeleting,
  getDeleteErr,
  isUploading,
  getUploadErr,
  shouldFetch
} from '../selectors';
import { ApplicationState } from '../../types';

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

  describe('isFetching', () => {
    const selector = isFetching as OutSelector<boolean>;
    it('should return false', () => {
      const state = createState({});
      const fetching = selector.resultFunc(state);
      expect(fetching).toBe(false);
    });
    it('should return true', () => {
      const state = createState({ fetching: true });
      const fetching = selector.resultFunc(state);
      expect(fetching).toBe(true);
    });
  });

  describe('getFetchErr', () => {
    const selector = getFetchErr as OutSelector<string>;
    it('should return empty string', () => {
      const state = createState({});
      const err = selector.resultFunc(state);
      expect(err).toBe('');
    });
    it('should return string', () => {
      const error = 'some error';
      const state = createState({ fetchError: error });
      const err = selector.resultFunc(state);
      expect(err).toBe(error);
    });
  });

  describe('isDeleting', () => {
    const selector = isDeleting as OutSelector<boolean>;
    it('should return false', () => {
      const state = createState({});
      const str = selector.resultFunc(state);
      expect(str).toBe(false);
    });
    it('should return true', () => {
      const state = createState({ deleting: true });
      const str = selector.resultFunc(state);
      expect(str).toBe(true);
    });
  });

  describe('getDeleteErr', () => {
    const selector = getDeleteErr as OutSelector<string>;
    it('should return empty string', () => {
      const state = createState({});
      const err = selector.resultFunc(state);
      expect(err).toBe('');
    });
    it('should return string', () => {
      const error = 'some error';
      const state = createState({ deleteError: error });
      const err = selector.resultFunc(state);
      expect(err).toBe(error);
    });
  });

  describe('isUploading', () => {
    const selector = isUploading as OutSelector<boolean>;
    it('should return false', () => {
      const state = createState({});
      const str = selector.resultFunc(state);
      expect(str).toBe(false);
    });
    it('should return true', () => {
      const state = createState({ uploading: true });
      const str = selector.resultFunc(state);
      expect(str).toBe(true);
    });
  });

  describe('getUploadErr', () => {
    const selector = getUploadErr as OutSelector<string>;
    it('should return empty string', () => {
      const state = createState({});
      const err = selector.resultFunc(state);
      expect(err).toBe('');
    });
    it('should return string', () => {
      const error = 'some error';
      const state = createState({ uploadingError: error });
      const err = selector.resultFunc(state);
      expect(err).toBe(error);
    });
  });

  describe('shouldFetch', () => {
    const selector = shouldFetch as OutSelector<boolean>;
    it('should return true', () => {
      const state = createState({});
      const shouldFetch = selector.resultFunc(state);
      expect(shouldFetch).toBe(true);
    });
    it('should return false', () => {
      const state = createState({ fetching: true });
      const shouldFetch = selector.resultFunc(state);
      expect(shouldFetch).toBe(false);
    });
    it('should return false', () => {
      const state = createState({ fetchedAt: 4654665 });
      const shouldFetch = selector.resultFunc(state);
      expect(shouldFetch).toBe(false);
    });
  });
});
