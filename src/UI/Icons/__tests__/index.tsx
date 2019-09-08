import React from 'react';
import { create } from 'react-test-renderer';

import {
  CloudUploadIcon,
  PowerSettingsIcon,
  Description,
  DeleteIcon,
  CloudDownload
} from '../index';

describe('Icons', () => {
  describe('CloudUploadIcon', () => {
    it('Snapshot', () => {
      const component = create(<CloudUploadIcon />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('PowerSettingsIcon', () => {
    it('Snapshot', () => {
      const component = create(<PowerSettingsIcon />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('Description', () => {
    it('Snapshot', () => {
      const component = create(<Description />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('DeleteIcon', () => {
    it('Snapshot', () => {
      const component = create(<DeleteIcon />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('CloudDownload', () => {
    it('Snapshot', () => {
      const component = create(<CloudDownload />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
