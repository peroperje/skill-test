import React from 'react';
import { create } from 'react-test-renderer';
import { renderHook, act } from '@testing-library/react-hooks';

import Delete, { useDisable } from '../Delete';

describe('Delete', () => {
  it('Snapshot', () => {
    const action = jest.fn();
    const component = create(<Delete action={action} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('useDisable', () => {
    const { result } = renderHook(() => useDisable());
    it('init state of hooks should be false', () => {
      expect(result.current.disable).toBe(false);
    });

    it('should be true ', () => {
      act(() => {
        result.current.setDisable(true);
      });
      expect(result.current.disable).toBe(true);
    });
  });
});
