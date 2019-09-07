import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { getCUser } from '../../../state/cUser/selectors';
import { logout } from '../../../state/cUser/actions';
import { ApplicationState } from '../../../state/types';
import { StateProps, DispatchProps } from './types';
import UserWelcome from './UserWelcome';

const mapStateToProps: MapStateToProps<
  StateProps,
  {},
  ApplicationState
> = state => {
  const cUser = getCUser(state);
  return {
    firstName: cUser.firstName,
    lastName: cUser.lastName
  };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  logout: (): void => {
    dispatch(logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserWelcome);
