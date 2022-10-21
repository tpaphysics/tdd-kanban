import { BoxProps } from '@chakra-ui/react';
import { act, renderHook } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import columns from '../../../data/columns';
import lists from '../../../data/lists';
import KanbanColumnProvider from '../../../Hooks/useColumn/Provider';
import KanbanProvider from '../../../Hooks/useKanban/Provider';
import * as useList from '../../../Hooks/useList';
import KanbanListProvider from '../../../Hooks/useList/Provider';
import { useEditableCard } from './useEditableCard';

describe('useEditableCard hook test', () => {
  const mockedColumn = columns[0];
  const mockedList = mockedColumn.lists[0];
  const mockedCard = mockedList.cards[0];

  const wrapper = ({ children }: BoxProps) => (
    <KanbanProvider>
      <KanbanColumnProvider initialColumn={mockedColumn}>
        <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
      </KanbanColumnProvider>
    </KanbanProvider>
  );

  const mockedUseList = vi
    .spyOn(useList, 'useList')
    .mockImplementation(
      () => ({ list: mockedList, AddCard: vi.fn(), removedCard: vi.fn() } as any),
    );
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should be false the finished state by default', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });
    act(() => {
      result.current.finished;
    });
    expect(result.current.finished).toEqual(true);
  });
  it('handleClickTag, should be updateded finished state for true', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });

    act(() => {
      result.current.handleClickTag();
    });
    expect(result.current.finished).toEqual(false);
  });
  it('handleClickCheck, should contain (...) when click in check button and when mockerLargeTaskValue for bigger than 25', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });
    const mockedLargeTaskValue = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    act(() => {
      result.current.setPreTask(mockedLargeTaskValue);
    });

    act(() => {
      result.current.handleClickCheck();
    });

    expect(result.current.task.includes('...')).toEqual(true);
  });
  it('handleClickCheck, should be updateded finished value for (Edit task) when input to be empty', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });

    act(() => {
      result.current.setPreTask('');
    });

    act(() => {
      result.current.handleClickCheck();
    });
    expect(result.current.task).toEqual('Edit task');
  });

  it('handleRemoveCard, should be called the function removeCard', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });

    act(() => {
      result.current.handleRemoveCard();
    });
    expect(mockedUseList).toBeCalled();
  });
});
