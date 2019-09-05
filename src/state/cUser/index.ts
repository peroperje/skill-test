import { Reducer } from 'redux';
import { CUserState, CUserActionsTypes } from './types';

export const INIT_STATE: CUserState = {
  data: {},
  fetching: false,
  error: ''
};

const reducer: Reducer<CUserState> = (
  state = INIT_STATE,
  action
): CUserState => {
  const { type, payload } = action;
  switch (type) {
    case CUserActionsTypes.LOGIN_REQUEST:
      return {
        ...state,
        ...{
          fetching: true,
          error: ''
        }
      };
    case CUserActionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...{
          fetching: false,
          data: payload
        }
      };
    case CUserActionsTypes.LOGIN_FAILED:
      return {
        ...state,
        ...{
          fetching: false,
          error: payload
        }
      };
    case CUserActionsTypes.LOGOUT:
      return { ...INIT_STATE };
    default:
      return state;
  }
};

export default reducer;
