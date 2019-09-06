import { FileState } from '../types';

export const INIT_STATE: FileState = {
  allId: [],
  byId: {},
  fetching: false,
  fetchError: '',
  uploading: false,
  uploadingError: '',
  deleting: false,
  deleteError: ''
};
