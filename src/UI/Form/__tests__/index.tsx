import React from 'react';
import { create } from 'react-test-renderer';

import { TextField } from '../index';

describe('TextField', () => {
  it('Snapshot', () => {
    const component = create(<TextField />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
