import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { ApplicationState } from '../../state/types';
import { loginRequest } from '../../state/cUser/actions';
import { isFetching, getError } from '../../state/cUser/selectors';
import { ActionsProp, StateProps } from './types';
import Login from './Login';

const mapStateToProp: MapStateToProps<
  StateProps,
  {},
  ApplicationState
> = state => ({
  isFetching: isFetching(state),
  error: getError(state)
});

const mapDispatchToProps: MapDispatchToProps<ActionsProp, {}> = dispatch => ({
  submit: (data): void => {
    dispatch(loginRequest(data));
  }
});

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Login);
