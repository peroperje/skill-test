import React from 'react';
import { create } from 'react-test-renderer';

import { Typography } from '../index';

describe('Typography', () => {
  it('Snapshot', () => {
    const component = create(<Typography>Some text</Typography>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Snapshot variant', () => {
    const component = create(<Typography variant="h3">Some text</Typography>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
