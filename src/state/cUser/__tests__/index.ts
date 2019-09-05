import reducer, { INIT_STATE } from '../index';
import { loginRequest, loginSuccess, loginFailed } from '../actions';
import { CUser, CUserState } from '../types';

const createState = (obj: {
  data?: CUser;
  fetching?: boolean;
  error?: string;
}): CUserState => ({ ...INIT_STATE, ...obj });

describe('cUser Reducer', () => {
  it('should be defined', () => {
    expect(reducer).toBeDefined();
  });

  it('should have proper state after emitted request action', () => {
    const oldState = createState({ error: 'some old error message' });
    const payload = { email: 'petar@ptt.yu', password: '456546' };
    const action = loginRequest(payload);
    const state = reducer(oldState, action);
    const expectedState = createState({ fetching: true });
    expect(state).toEqual(expectedState);
  });

  it('should have proper state after emitted success action', () => {
    const oldState = createState({ fetching: true });
    const payload = {
      id: 1,
      firstName: 'someFirstName',
      lastName: 'someLastName',
      email: 'some@ptt.yu'
    };
    const action = loginSuccess(payload);
    const state = reducer(oldState, action);
    const expectedState = createState({
      fetching: false,
      data: payload
    });
    expect(state).toEqual(expectedState);
  });

  it('should have proper state after emitted failed action', () => {
    const oldState = createState({ fetching: true });
    const payload = 'error string';
    const action = loginFailed(payload);
    const state = reducer(oldState, action);
    const expectedState = createState({ error: payload });
    expect(state).toEqual(expectedState);
  });
});
