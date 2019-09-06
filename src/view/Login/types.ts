import { PayloadRequest } from '../../state/cUser/types';
export interface ActionsProp {
  submit: (data: PayloadRequest) => void;
}
