import React from 'react';
import { create } from 'react-test-renderer';

import { Toolbar } from '../index';

describe('Toolbar', () => {
  it('Snapshot', () => {
    const component = create(<Toolbar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
