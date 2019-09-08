import React from 'react';
import { create } from 'react-test-renderer';

import { Table, TableRow, TableBody, TableCell, TableHead } from '../index';

describe('Table', () => {
  describe('Table', () => {
    it('Snapshot', () => {
      const component = create(
        <Table>
          <></>
        </Table>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('TableRow', () => {
    it('Snapshot', () => {
      const component = create(
        <TableRow>
          <></>
        </TableRow>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('TableBody', () => {
    it('Snapshot', () => {
      const component = create(
        <TableBody>
          <></>
        </TableBody>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('TableCell', () => {
    it('Snapshot', () => {
      const component = create(
        <TableCell>
          <></>
        </TableCell>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('TableHead', () => {
    it('Snapshot', () => {
      const component = create(
        <TableHead>
          <></>
        </TableHead>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('Integration', () => {
    it('Snapshot', () => {
      const component = create(
        <Table>
          <TableHead>
            <TableCell>Some header</TableCell>
          </TableHead>
          <TableBody>
            <TableCell>Something</TableCell>
          </TableBody>
        </Table>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
