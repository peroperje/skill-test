import React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { ApplicationState } from '../state/types';
import { isLogged } from '../state/cUser/selectors';

interface StateProps {
  isLogged: boolean;
}

const mapStateToProps: MapStateToProps<
  StateProps,
  {},
  ApplicationState
> = state => ({
  isLogged: isLogged(state)
});

interface ChildrenProps {
  children: (x: boolean) => React.ReactNode;
}

type ISLoggedProps = StateProps & ChildrenProps;

export const ISLogged: React.FC<ISLoggedProps> = ({
  children,
  isLogged
}: ISLoggedProps): JSX.Element => <>{children(isLogged)}</>;

export default connect(mapStateToProps)(ISLogged);
