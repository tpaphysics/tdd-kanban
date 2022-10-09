import { useCounter } from './userCounter';
import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { act, renderHook } from '@testing-library/react';

describe('useCount hook', () => {
  it('Should it inital value equal 0', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.count;
    });
    expect(result.current.count).toBe(0);
  });

  it('Should increment the count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('Should decrement the count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});
