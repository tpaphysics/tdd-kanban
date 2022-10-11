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
  it('handleOnBlur, should contain when updated (...)', () => {
    const { result } = renderHook(useEditableCard);
    const mockedLargeTaskValue = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    act(() => {
      result.current.setTask(mockedLargeTaskValue);
    });

    act(() => {
      result.current.handleOnBlur();
    });

    expect(result.current.task.includes('...')).toEqual(true);
  });
  it('handleClickTag, should be updateded finished value for (Edit task) when input to be empty', () => {
    const { result } = renderHook(useEditableCard);

    act(() => {
      result.current.setTask('');
    });

    act(() => {
      result.current.handleOnBlur();
    });
    expect(result.current.task).toEqual('Edit task');
  });
});
