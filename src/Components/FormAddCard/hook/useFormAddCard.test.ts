import { act, renderHook } from '@testing-library/react';
import { describe, it } from 'vitest';
import { useFormAddCard } from './useFormAddCard';

describe('useFormAddCard hook test', () => {
  it('should be false show default value', () => {
    const { result } = renderHook(useFormAddCard);
    act(() => {
      result.current.show;
    });
    expect(result.current.show).toEqual(false);
  });
  it('handleToogle, should it updateded toogle value for true', () => {
    const { result } = renderHook(useFormAddCard);

    act(() => {
      result.current.handleToogle();
    });

    expect(result.current.show).toEqual(true);
  });
  it('should be empty ("") newTask default value', () => {
    const { result } = renderHook(useFormAddCard);
    act(() => {
      result.current.newTask;
    });
    expect(result.current.newTask).toEqual('');
  });
});
