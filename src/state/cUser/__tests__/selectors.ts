import { OutputSelector } from 'reselect';
import { ApplicationState } from '../../index';
import { CUserState, CUser } from '../types';
import { getCUser, isFetching, getError, isLogged } from '../selectors';

type OutSelector<T> = OutputSelector<ApplicationState, T, (x: CUserState) => T>;
const initState: CUserState = {
  error: '',
  fetching: false,
  data: {
    id: 1,
    email: 'some@ptt.yu',
    lastName: 'firstName',
    firstName: 'lastName'
  }
};

const createSate = (o: Partial<CUserState>): CUserState => {
  return { ...initState, ...o };
};

describe('cUser Selectors', () => {
  describe('getCUser', () => {
    it('should be defined', () => {
      expect(getCUser).toBeDefined();
    });

    it('should return cUserData', () => {
      const state = createSate({});
      const selector = getCUser as OutSelector<CUser>;
      const data = selector.resultFunc(state);
      expect(data).toEqual(initState.data);
    });
  });

  describe('isFetching', () => {
    it('should be defined', () => {
      expect(isFetching).toBeDefined();
    });

    it('should return false', () => {
      const state = createSate({});
      const selector = isFetching as OutSelector<boolean>;
      const fetching = selector.resultFunc(state);
      expect(fetching).toBe(false);
    });

    it('should return true', () => {
      const state = createSate({ fetching: true });
      const selector = isFetching as OutSelector<boolean>;
      const fetching = selector.resultFunc(state);
      expect(fetching).toBe(true);
    });
  });

  describe('getError', () => {
    it('should be defined', () => {
      expect(getError).toBeDefined();
    });

    it('should return empty string', () => {
      const state = createSate({});
      const selector = getError as OutSelector<string>;
      const err = selector.resultFunc(state);
      expect(err).toBe('');
    });
    it('should return error string', () => {
      const error = 'some error';
      const state = createSate({ error });
      const selector = getError as OutSelector<string>;
      const err = selector.resultFunc(state);
      expect(err).toBe(error);
    });
  });

  describe('isLogged', () => {
    it('should be defined', () => {
      expect(isLogged).toBeDefined();
    });

    it('should return true', () => {
      const state = createSate({}).data as CUser;
      const selector = isLogged as OutputSelector<
        ApplicationState,
        boolean,
        (x: CUser) => boolean
      >;
      const isLoggedIn = selector.resultFunc(state);
      expect(isLoggedIn).toBe(true);
    });
    it('should return false', () => {
      const state = createSate({ data: {} }).data as {};
      const selector = isLogged as OutputSelector<
        ApplicationState,
        boolean,
        (x: {}) => boolean
      >;
      const isLoggedIn = selector.resultFunc(state);
      expect(isLoggedIn).toBe(false);
    });
  });
});
