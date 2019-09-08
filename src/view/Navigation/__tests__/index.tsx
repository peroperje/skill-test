import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import { ApplicationState } from '../../../state/types';

import { MockedProvider } from '../../../utils/testHelpers/mockStore';
import Navigation from '../index';

describe('Navigation', () => {
  it('Snapshot when user logged', () => {
    const cUserState: Partial<ApplicationState> = {
      cUser: {
        data: {
          id: 1,
          firstName: 'firstName',
          lastName: 'lastName'
        },
        error: '',
        fetching: false
      }
    };
    const component = create(
      <MockedProvider state={cUserState}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </MockedProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
