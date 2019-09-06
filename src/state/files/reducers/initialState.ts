import { FileState } from '../types';

export const INIT_STATE: FileState = {
  allId: [],
  byId: {},
  fetching: false,
  fetchError: '',
  fetchedAt: 0,
  uploading: false,
  uploadingError: '',
  deleting: false,
  deleteError: ''
};
