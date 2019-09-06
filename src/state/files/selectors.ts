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

export const isFetching: Selector<ApplicationState, boolean> = createSelector(
  getState,
  state => {
    return state.fetching;
  }
);

export const getFetchErr: Selector<ApplicationState, string> = createSelector(
  getState,
  state => {
    return state.fetchError;
  }
);

export const isDeleting: Selector<ApplicationState, boolean> = createSelector(
  getState,
  state => {
    return state.deleting;
  }
);

export const getDeleteErr: Selector<ApplicationState, string> = createSelector(
  getState,
  state => {
    return state.deleteError;
  }
);

export const isUploading: Selector<ApplicationState, boolean> = createSelector(
  getState,
  state => {
    return state.uploading;
  }
);

export const getUploadErr: Selector<ApplicationState, string> = createSelector(
  getState,
  state => {
    return state.deleteError;
  }
);
