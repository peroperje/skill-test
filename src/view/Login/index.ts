import { connect, MapDispatchToProps } from 'react-redux';

import { loginRequest } from '../../state/cUser/actions';
import { ActionsProp } from './types';
import Login from './Login';

const mapDispatchToProps: MapDispatchToProps<ActionsProp, {}> = dispatch => ({
  submit: (data): void => {
    dispatch(loginRequest(data));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
