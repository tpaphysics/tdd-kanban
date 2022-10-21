import { BoxProps } from '@chakra-ui/react';
import { renderHook, act } from '@testing-library/react-hooks';
import uuid from 'react-uuid';
import KanbanProvider from '..';
import { useKanban } from '../..';

import columns from '../../../../data/columns';
import { ICard } from '../../../../data/interfaces/ICard';
import { IList } from '../../../../data/interfaces/IList';

describe('useKanbanProvider hook test', () => {
  const mockedColumns = columns;
  const mockedColumn = mockedColumns[0];
  const mockedLists = mockedColumn.lists;
  const mockedList = mockedLists[0];

  it('should be the initial column value equal mockedColumns', () => {
    const wrapper = ({ children }: BoxProps) => <KanbanProvider>{children}</KanbanProvider>;
    const { result } = renderHook(() => useKanban(), { wrapper });

    act(() => {
      result.current.columns;
    });
    expect(result.current?.columns).toMatchObject(mockedColumns);
  });

  it('handleUpdateCards, Should be added a new card', () => {
    const wrapper = ({ children }: BoxProps) => <KanbanProvider>{children}</KanbanProvider>;
    const { result } = renderHook(() => useKanban(), { wrapper });
    const mockedUpdatedCards = [...mockedList.cards, { id: uuid(), task: 'TEST', finished: false }];
    console.log(mockedUpdatedCards);
    act(() => {
      result.current?.handleUpdateCards(mockedColumn, mockedList, mockedUpdatedCards as any);
    });

    const response = result.current.columns[0].lists[0].cards.filter(
      (card) => card.task === 'TEST',
    );

    expect(response.length).toBe(1);
  });
  it('handleUpdateLists, Should be added a new card', () => {
    const wrapper = ({ children }: BoxProps) => <KanbanProvider>{children}</KanbanProvider>;
    const { result } = renderHook(() => useKanban(), { wrapper });
    const mockedUpdatedLists = [
      ...mockedLists,
      { id: uuid(), title: 'LIST', bgList: 'red', tag: 'darth', cards: [] } as IList,
    ];

    act(() => {
      result.current?.handleUpdateLists(mockedColumn, mockedUpdatedLists);
    });

    const response = result.current.columns[0].lists.filter((list) => list.tag === 'darth');

    expect(response.length).toBe(1);
  });
});
