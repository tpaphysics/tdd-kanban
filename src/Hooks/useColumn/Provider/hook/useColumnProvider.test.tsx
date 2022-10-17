import { BoxProps } from '@chakra-ui/react';
import { renderHook, act } from '@testing-library/react-hooks';
import KanbanColumnProvider from '..';
import { useColumn } from '../..';
import columns from '../../../../data/columns';

describe('useKanbanColumnProvider hook test', () => {
  const mockedColumn = columns[0];

  it('should be the initial column value equal mockedColumn', () => {
    const wrapper = ({ children }: BoxProps) => (
      <KanbanColumnProvider initialColumn={mockedColumn}>{children}</KanbanColumnProvider>
    );
    const { result } = renderHook(() => useColumn(), { wrapper });

    act(() => {
      result.current.column;
    });
    expect(result.current?.column).toMatchObject(mockedColumn);
  });

  it('addList, Should contain one new list when add one (New List)', () => {
    const mockedNewList = { title: 'New List', bgList: 'green', tag: 'super' };

    const wrapper = ({ children }: BoxProps) => (
      <KanbanColumnProvider initialColumn={mockedColumn}>{children}</KanbanColumnProvider>
    );
    const { result } = renderHook(() => useColumn(), { wrapper });

    act(() => {
      result.current?.addList(mockedNewList);
    });
    const response = result.current?.column.lists.filter((list) => list.title === 'New List');
    expect(response?.length).toBe(1);
  });
  it('removeList, Should be removed list of the column', () => {
    const wrapper = ({ children }: BoxProps) => (
      <KanbanColumnProvider initialColumn={mockedColumn}>{children}</KanbanColumnProvider>
    );
    const { result } = renderHook(() => useColumn(), { wrapper });

    const mockedId = mockedColumn.lists[0].id;
    act(() => {
      result.current?.removeList(mockedId);
    });

    const response = result.current?.column.lists.filter((list) => list.id === mockedId);
    expect(response?.length).toBe(0);
  });
});
