import { createSelector, Selector } from 'reselect';
import { CUserState, CUser } from './types';
import { ApplicationState } from '../types';

const getState = (state: ApplicationState): CUserState => state.cUser;

export const getCUser: Selector<ApplicationState, CUser> = createSelector(
  getState,
  state => state.data as CUser
);

export const isFetching: Selector<ApplicationState, boolean> = createSelector(
  getState,
  state => state.fetching
);

export const getError: Selector<ApplicationState, string> = createSelector(
  getState,
  state => state.error
);

export const isLogged: Selector<ApplicationState, boolean> = createSelector(
  getCUser,
  state => state.id !== undefined
);
