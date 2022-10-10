import { act, renderHook } from '@testing-library/react';
import { describe, it } from 'vitest';
import { useKanbanList } from './useKanbanList';

describe('useKanbanList hook test', () => {
  it('', () => {
    const { result } = renderHook(useKanbanList);
    act(() => {
      result.current;
    });
    expect(result.current).toBeDefined();
  });
});
