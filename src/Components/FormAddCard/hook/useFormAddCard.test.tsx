import { BoxProps } from '@chakra-ui/react';
import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { describe, it, vi } from 'vitest';
import columns from '../../../data/columns';

import KanbanColumnProvider from '../../../Hooks/useColumn/Provider';
import * as useKanban from '../../../Hooks/useKanban';
import KanbanProvider from '../../../Hooks/useKanban/Provider';
import * as useList from '../../../Hooks/useList';

import KanbanListProvider from '../../../Hooks/useList/Provider';
import { useFormAddCard } from './useFormAddCard';

describe('useFormAddCard hook test', () => {
  const mockedColumn = columns[0];
  const mockedList = mockedColumn.lists[0];

  const wrapper = ({ children }: BoxProps) => (
    <KanbanProvider>
      <KanbanColumnProvider initialColumn={mockedColumn}>
        <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
      </KanbanColumnProvider>
    </KanbanProvider>
  );

  const mockedUseKanban = vi
    .spyOn(useKanban, 'useKanban')
    .mockImplementation(() => ({ handleUpdateCards: vi.fn() } as any));

  const mockedUseList = vi
    .spyOn(useList, 'useList')
    .mockImplementation(() => ({ AddCard: vi.fn() } as any));

  const mockedUseColumn = vi.spyOn(useList, 'useList').mockImplementation(() => ({} as any));

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
    expect(mockedUseKanban).toBeCalled();
    expect(mockedUseColumn).toBeCalled();
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
    expect(mockedUseKanban).toBeCalled();
    expect(mockedUseList).toBeCalled();
    expect(mockedUseColumn).toBeCalled();

    expect(result.current.show).toEqual(false);
  });
});
