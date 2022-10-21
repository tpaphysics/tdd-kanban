import { BoxProps } from '@chakra-ui/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { DropResult } from 'react-beautiful-dnd';
import uuid from 'react-uuid';
import KanbanProvider from '..';
import { useKanban } from '../..';

import columns from '../../../../data/columns';
import { IList } from '../../../../data/interfaces/IList';

describe('useKanbanProvider hook test', () => {
  const mockedColumns = columns;
  const mockedColumn = mockedColumns[0];
  const mockedLists = mockedColumn.lists;
  const mockedList = mockedLists[0];

  const mockedMovedCardInList = {
    draggableId:
      '{"columnId":"836465da-523a-49bf-8ff2-33a4a2df275b","cardId":"36c9f0eb-12f8-4d22-8b12-5aae52d1f339"}',
    type: 'card',
    source: {
      index: 0,
      droppableId:
        '{"listId":"a4557776-4933-404d-983e-3d502d73b332","columnId":"836465da-523a-49bf-8ff2-33a4a2df275b"}',
    },
    reason: 'DROP',
    mode: 'FLUID',
    destination: {
      droppableId:
        '{"listId":"a4557776-4933-404d-983e-3d502d73b332","columnId":"836465da-523a-49bf-8ff2-33a4a2df275b"}',
      index: 1,
    },
    combine: null,
  };

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
  it('onDragEnd, Should be moved card whithin list', () => {
    const wrapper = ({ children }: BoxProps) => <KanbanProvider>{children}</KanbanProvider>;
    const { result } = renderHook(() => useKanban(), { wrapper });

    act(() => {
      result.current?.onDragEnd(mockedMovedCardInList as any);
    });

    const response = result.current.columns[0].lists[0].cards[0].task;

    expect(response).toBe('Task 2');
  });
});
