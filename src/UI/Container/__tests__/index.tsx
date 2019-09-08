import React from 'react';
import { create } from 'react-test-renderer';

import { Container } from '../index';

describe('Container', () => {
  it('Snapshot', () => {
    const component = create(
      <Container>
        <>Some children</>
      </Container>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
