import React from 'react';
import { create } from 'react-test-renderer';

import { LinearProgress, CircularProgress } from '../index';

describe('Progress', () => {
  describe('LinearProgress', () => {
    it('Snapshot', () => {
      const component = create(<LinearProgress />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('CircularProgress', () => {
    it('Snapshot', () => {
      const component = create(<CircularProgress />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
