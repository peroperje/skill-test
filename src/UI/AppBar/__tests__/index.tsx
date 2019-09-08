import React from 'react';
import { create } from 'react-test-renderer';

import { AppBar } from '../index';

describe('AppBar', () => {
  it('Snapshot', () => {
    const component = create(<AppBar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
