import { createSelector, Selector } from 'reselect';

import { ApplicationState } from '../index';
import { FileItem, FileState } from './types';

const getState = (state: ApplicationState): FileState => state.files;

export const getFiles: Selector<ApplicationState, FileItem[]> = createSelector(
  getState,
  state => {
    const { allId, byId } = state;
    return allId.map(i => byId[i]);
  }
);

const isFetching: Selector<ApplicationState, boolean> = createSelector(
  getState,
  state => {
    return state.fetching;
  }
);

const getFetchingErr: Selector<ApplicationState, string> = createSelector(
  getState,
  state => {
    return state.fetchError;
  }
);

const isDeleting: Selector<ApplicationState, boolean> = createSelector(
  getState,
  state => {
    return state.deleting;
  }
);

const getDelletingErr: Selector<ApplicationState, string> = createSelector(
  getState,
  state => {
    return state.deleteError;
  }
);

const isUploading: Selector<ApplicationState, boolean> = createSelector(
  getState,
  state => {
    return state.uploading;
  }
);
const getUpoadingErr: Selector<ApplicationState, string> = createSelector(
  getState,
  state => {
    return state.deleteError;
  }
);
