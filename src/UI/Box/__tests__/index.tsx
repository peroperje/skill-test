import React from 'react';
import { create } from 'react-test-renderer';

import { Box } from '../index';

describe('Box', () => {
  it('Snapshot', () => {
    const component = create(<Box />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
