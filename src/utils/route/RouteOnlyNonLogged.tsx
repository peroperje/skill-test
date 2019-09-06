import React, { ComponentType } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect, MapStateToProps } from 'react-redux';

import { ROOT_ROUTE } from './routesDefinition';
import { isLogged } from '../../state/cUser/selectors';
import { ApplicationState } from '../../state/types';

interface StateProps {
  isLogged: boolean;
}

interface OwnProps extends RouteProps {
  component: ComponentType;
}

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  ApplicationState
> = state => ({
  isLogged: isLogged(state)
});

export const RouteOnlyNonLogged: React.FC<StateProps & OwnProps> = ({
  isLogged,
  component: Component,
  ...rest
}: StateProps & OwnProps): JSX.Element => {
  return (
    <Route
      {...rest}
      render={(): JSX.Element => {
        return isLogged ? (
          <Redirect to={ROOT_ROUTE} />
        ) : (
          <Component {...rest} />
        );
      }}
    />
  );
};

export default connect(mapStateToProps)(RouteOnlyNonLogged);
