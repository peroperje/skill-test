import React from 'react';
import { create } from 'react-test-renderer';

import { ApplicationState } from '../../../state/types';
import { MockedProvider } from '../../testHelpers/mockStore';

import ISLogged from '../ISLogged';

describe('ISLogged', () => {
  it('should return false', () => {
    const state: Partial<ApplicationState> = {
      cUser: {
        data: {},
        fetching: false,
        error: ''
      }
    };
    let logged = true;
    create(
      <MockedProvider state={state}>
        <ISLogged>
          {(isLogged): JSX.Element => {
            logged = isLogged;
            return <></>;
          }}
        </ISLogged>
      </MockedProvider>
    );

    expect(logged).toBe(false);
  });
  it('should return true', () => {
    const state: Partial<ApplicationState> = {
      cUser: {
        data: {
          id: 1,
          firstName: 'foo',
          lastName: 'bar',
          email: 'foo@ptt.yu'
        },
        fetching: false,
        error: ''
      }
    };
    let logged = true;
    create(
      <MockedProvider state={state}>
        <ISLogged>
          {(isLogged): JSX.Element => {
            logged = isLogged;
            return <></>;
          }}
        </ISLogged>
      </MockedProvider>
    );

    expect(logged).toBe(true);
  });
});
