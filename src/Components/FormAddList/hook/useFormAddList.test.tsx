import { BoxProps } from '@chakra-ui/react';
import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { describe, it, vi } from 'vitest';
import columns from '../../../data/columns';
import KanbanColumnProvider from '../../../Hooks/useColumn/Provider';
import * as useColumn from '../../../Hooks/useColumn';
import useFormAddList from './useFormAddList';

describe('useFormAddList hook test', () => {
  const mockedcolumn = columns[0];

  const wrapper = ({ children }: BoxProps) => (
    <KanbanColumnProvider initialColumn={mockedcolumn}>{children}</KanbanColumnProvider>
  );

  const mockedUseColumn = vi
    .spyOn(useColumn, 'useColumn')
    .mockImplementation(() => ({ AddCard: vi.fn() } as any));

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
