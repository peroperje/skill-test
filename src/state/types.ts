import { CUserState } from './cUser/types';
import { FileState } from './files/types';

export interface ApplicationState {
  cUser: CUserState;
  files: FileState;
}
