import React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { compose } from 'recompose';

import jwt from './utils/localStorage';
import { isLogged, isFetching } from './state/cUser/selectors';
import { loginRequest } from './state/cUser/actions';
import { ApplicationState } from './state/types';
import withShouldFetch from './utils/HoC/withShouldFetch';

interface StateProps {
  shouldFetch: boolean;
}

interface DispatchProps {
  reLogin: () => void;
}

const mapStateToProps: MapStateToProps<
  StateProps,
  {},
  ApplicationState
> = state => {
  console.log(
    'Should fetch',
    jwt.exists() && !isLogged(state) && !isFetching(state)
  );
  return {
    shouldFetch: jwt.exists() && !isLogged(state) && !isFetching(state)
  };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  reLogin: (): void => {
    // this is hardcoded because we don't have Auth implementation by JWT token
    if (jwt.exists()) {
      dispatch(
        loginRequest({
          email: jwt.get().email,
          password: ''
        })
      );
    }
  }
});

const RELogin: React.FC = ({
  children
}: React.PropsWithChildren<React.ReactNode>) => <>{children}</>;

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withShouldFetch('shouldFetch', 'reLogin')
)(RELogin);
