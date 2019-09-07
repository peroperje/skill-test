import React, { ComponentType } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { ROOT_ROUTE } from './routesDefinition';
import ISLogged from '../HoC/ISLogged';

interface OwnProps extends RouteProps {
  component: ComponentType;
}

export const RouteOnlyNonLogged: React.FC<OwnProps> = ({
  component: Component,
  ...rest
}: OwnProps): JSX.Element => {
  return (
    <ISLogged>
      {(isLogged): React.ReactNode => {
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
      }}
    </ISLogged>
  );
};

export default RouteOnlyNonLogged;
