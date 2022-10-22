import { BoxProps } from '@chakra-ui/react';
import { renderHook, act } from '@testing-library/react-hooks';
import uuid from 'react-uuid';
import { vi } from 'vitest';
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
  const mockedMovedCard2 = {
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
        '{"listId":"196700bc-b6ff-4e6b-ad1b-3be61d771db7","columnId":"a8fdb3bc-8399-4e27-91da-3ddbb6cd9eb5"}',
      index: 0,
    },
    combine: null,
  };

  const mockedMovedCard3 = {
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
        '{"listId":"196700bc-b6ff-4e6b-ad1b-3be61d771db7","columnId":"836465da-523a-49bf-8ff2-33a4a2df275b"}',
      index: 0,
    },
    combine: null,
  };

  const mockedMovedList1 = {
    draggableId: 'a4557776-4933-404d-983e-3d502d73b332',
    type: 'list',
    source: {
      index: 0,
      droppableId: '{"columnId":"836465da-523a-49bf-8ff2-33a4a2df275b","listId":""}',
    },
    reason: 'DROP',
    mode: 'FLUID',
    destination: {
      droppableId: '{"columnId":"836465da-523a-49bf-8ff2-33a4a2df275b","listId":""}',
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
  it('onDragEnd, Should be moved card for other list in other column', () => {
    const wrapper = ({ children }: BoxProps) => <KanbanProvider>{children}</KanbanProvider>;
    const { result } = renderHook(() => useKanban(), { wrapper });

    act(() => {
      result.current?.onDragEnd(mockedMovedCard2 as any);
    });

    const response = result.current.columns[1].lists[0].cards[0].task;

    expect(response).toBe('Task 2');
  });

  it('onDragEnd, Should be moved list for other column', () => {
    const wrapper = ({ children }: BoxProps) => <KanbanProvider>{children}</KanbanProvider>;
    const { result } = renderHook(() => useKanban(), { wrapper });

    const mockedMovedListColumn1To2 = {
      draggableId: '196700bc-b6ff-4e6b-ad1b-3be61d771db7',
      type: 'list',
      source: {
        index: 0,
        droppableId: '{"columnId":"a8fdb3bc-8399-4e27-91da-3ddbb6cd9eb5","listId":""}',
      },
      reason: 'DROP',
      mode: 'FLUID',
      destination: {
        droppableId: '{"columnId":"836465da-523a-49bf-8ff2-33a4a2df275b","listId":""}',
        index: 1,
      },
      combine: null,
    };

    act(() => {
      result.current?.onDragEnd(mockedMovedListColumn1To2 as any);
    });

    act(() => {
      result.current?.onDragEnd(mockedMovedList1 as any);
    });

    const response = result.current.columns[0].lists[0].bgList;

    expect(response).toBe('PURPLE');
  });

  it('handleUpdateTask, Should be updated the card task', () => {
    const wrapper = ({ children }: BoxProps) => <KanbanProvider>{children}</KanbanProvider>;
    const { result } = renderHook(() => useKanban(), { wrapper });

    act(() => {
      result.current?.setColumns(mockedColumns);
    });

    act(() => {
      result.current?.handleUpdateTask(
        result.current.columns[0],
        result.current.columns[0].lists[0],
        result.current.columns[0].lists[0].cards[0].id,
        'DarthVader',
      );
    });

    const response = result.current.columns[0].lists[0].cards[0];

    expect(response.task).toBe('DarthVader');
  });
});
