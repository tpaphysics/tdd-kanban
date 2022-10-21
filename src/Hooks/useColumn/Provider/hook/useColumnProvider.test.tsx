import { BoxProps } from '@chakra-ui/react';
import { renderHook, act } from '@testing-library/react-hooks';
import KanbanColumnProvider from '..';
import { useColumn } from '../..';
import columns from '../../../../data/columns';
import KanbanProvider from '../../../useKanban/Provider';
import KanbanListProvider from '../../../useList/Provider';

describe('useKanbanColumnProvider hook test', () => {
  const mockedColumn = columns[0];
  const mockedList = mockedColumn.lists[0];

  const wrapper = ({ children }: BoxProps) => (
    <KanbanProvider>
      <KanbanColumnProvider initialColumn={mockedColumn}>
        <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
      </KanbanColumnProvider>
    </KanbanProvider>
  );

  it('should be the initial column value equal mockedColumn', () => {
    const { result } = renderHook(() => useColumn(), { wrapper });

    act(() => {
      result.current.column;
    });
    expect(result.current?.column).toMatchObject(mockedColumn);
  });

  it('addList, Should contain one new list when add one (New List)', () => {
    const mockedNewList = { title: 'New List', bgList: 'green', tag: 'super' };

    const { result } = renderHook(() => useColumn(), { wrapper });

    act(() => {
      result.current?.addList(mockedNewList);
    });
    const response = result.current?.column.lists.filter((list) => list.title === 'New List');
    expect(response?.length).toBe(1);
  });
  it('removeList, Should be removed list of the column', () => {
    const { result } = renderHook(() => useColumn(), { wrapper });

    const mockedId = mockedColumn.lists[0].id;
    act(() => {
      result.current?.removeList(mockedId);
    });

    const response = result.current?.column.lists.filter((list) => list.id === mockedId);
    expect(response?.length).toBe(0);
  });
});
