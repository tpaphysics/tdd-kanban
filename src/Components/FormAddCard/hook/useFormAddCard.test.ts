import { act, renderHook } from '@testing-library/react';
import { describe, it } from 'vitest';
import { useFormAddCard } from './useFormAddCard';

describe('useEditableCard hook test', () => {
  it('should be false show default value', () => {
    const { result } = renderHook(useFormAddCard);
    act(() => {
      result.current.show;
    });
    expect(result.current.show).toEqual(false);
  });
});
