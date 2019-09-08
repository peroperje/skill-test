import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { ApplicationState } from '../../state/types';

interface Props {
  children: React.ReactNode;
  state: Partial<ApplicationState>;
}

const mockStore = configureStore([]);

export const MockedProvider: React.FC<Props> = ({
  children,
  state
}: Props): JSX.Element => {
  const store = mockStore(state);
  return <Provider store={store}>{children}</Provider>;
};
