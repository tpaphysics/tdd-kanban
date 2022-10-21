import { BoxProps } from '@chakra-ui/react';
import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { describe, it, vi } from 'vitest';
import columns from '../../../data/columns';
import KanbanColumnProvider from '../../../Hooks/useColumn/Provider';
import * as useColumn from '../../../Hooks/useColumn';
import useFormAddList from './useFormAddList';
import KanbanProvider from '../../../Hooks/useKanban/Provider';
import KanbanListProvider from '../../../Hooks/useList/Provider';
import * as useKanban from '../../../Hooks/useKanban';

describe('useFormAddList hook test', () => {
  const mockedColumn = columns[0];
  const mockedList = mockedColumn.lists[0];

  const wrapper = ({ children }: BoxProps) => (
    <KanbanProvider>
      <KanbanColumnProvider initialColumn={mockedColumn}>
        <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
      </KanbanColumnProvider>
    </KanbanProvider>
  );

  vi.spyOn(useColumn, 'useColumn').mockImplementation(() => ({} as any));
  vi.spyOn(useKanban, 'useKanban').mockImplementation(() => ({} as any));

  beforeAll(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it('handleAddList, should be updateded values of the title and tag for empty and bgList for BLACk', () => {
    const { result } = renderHook(() => useFormAddList(), { wrapper });

    act(() => {
      result.current.tag = 'TAG';
      result.current.title = 'LIST';
    });

    act(() => {
      result.current.handleAddList();
    });

    expect(result.current.bgList).toEqual('BLACK');
    expect(result.current.tag).toEqual('');
    expect(result.current.title).toEqual('');
  });
});
