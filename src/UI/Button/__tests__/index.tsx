import React from 'react';
import { create } from 'react-test-renderer';

import { CloudUploadIcon } from '../../Icons';

import { Button, IconButton } from '../index';

describe('Button', () => {
  it('Snapshot', () => {
    const component = create(<Button>Some</Button>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
describe('IconButton', () => {
  it('Snapshot', () => {
    const component = create(
      <IconButton>
        <CloudUploadIcon />
      </IconButton>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
