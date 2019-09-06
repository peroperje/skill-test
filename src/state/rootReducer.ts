import { combineReducers } from 'redux';

import cUser from './cUser';
import files from './files';

export default combineReducers({
  cUser,
  files
});
