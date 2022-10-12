import { BoxProps } from '@chakra-ui/react';
import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { describe, it, vi } from 'vitest';
import lists from '../../../data/lists';
import * as useList from '../../../Hooks/useList';
import KanbanListProvider from '../../../Hooks/useList/Provider';
import { useFormAddCard } from './useFormAddCard';

describe('useFormAddCard hook test', () => {
  const mockedList = lists[0];

  const wrapper = ({ children }: BoxProps) => (
    <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
  );

  const mockedUseList = vi
    .spyOn(useList, 'useList')
    .mockImplementation(() => ({ AddCard: vi.fn() } as any));

  beforeAll(() => {
    vi.restoreAllMocks();
  });

  it('should be false show default value', () => {
    useList;
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
  it('handleChange, should it updateded newTask value for TEST', () => {
    const { result } = renderHook(useFormAddCard);
    const mockedEvent = { target: { value: 'TEST' } } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockedEvent);
    });

    expect(result.current.newTask).toEqual('TEST');
  });
  it('handleClick, should be updateded the newTask value for empty', () => {
    const { result } = renderHook(() => useFormAddCard(), { wrapper });

    act(() => {
      result.current.setNewTask('TASK');
    });

    act(() => {
      result.current.handleClick();
    });
    expect(mockedUseList).toBeCalled();
    expect(result.current.newTask).toEqual('');
  });
  it('handleClick, should be updateded the show value for false', () => {
    const { result } = renderHook(() => useFormAddCard(), { wrapper });

    act(() => {
      result.current.setShow(true);
    });

    act(() => {
      result.current.handleClick();
    });
    expect(mockedUseList).toBeCalled();
    expect(result.current.show).toEqual(false);
  });
});
