import { act, renderHook } from '@testing-library/react';
import { describe, it } from 'vitest';
import { useEditableCard } from './useEditableCard';

describe('useEditableCard hook test', () => {
  it('should be false finished default value', () => {
    const { result } = renderHook(useEditableCard);
    act(() => {
      result.current.finished;
    });
    expect(result.current.finished).toEqual(false);
  });
  it('handleClickTag, should it updateded finished value for true', () => {
    const { result } = renderHook(useEditableCard);

    act(() => {
      result.current.handleClickTag();
    });
    expect(result.current.finished).toEqual(true);
  });
});
