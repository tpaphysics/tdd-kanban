import { BoxProps } from '@chakra-ui/react';
import { act, renderHook } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import lists from '../../../data/lists';
import * as useList from '../../../Hooks/useList';
import KanbanListProvider from '../../../Hooks/useList/Provider';
import { useEditableCard } from './useEditableCard';

describe('useEditableCard hook test', () => {
  useList;
  const mockedList = lists[0];
  const mockedCard = mockedList.cards[0];
  const mockedUseList = vi
    .spyOn(useList, 'useList')
    .mockImplementation(
      () => ({ list: mockedList, AddCard: vi.fn(), removedCard: vi.fn() } as any),
    );
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  const wrapper = ({ children }: BoxProps) => (
    <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
  );

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
