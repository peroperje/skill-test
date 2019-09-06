import { Reducer } from 'redux';
import reduceReducers from 'reduce-reducers';

import { FileState } from './types';
import fetch from './reducers/fetch';
import upload from './reducers/upload';
import deleteFile from './reducers/delete';

const reducer = reduceReducers(fetch, upload, deleteFile);
export default reducer as Reducer<FileState>;
