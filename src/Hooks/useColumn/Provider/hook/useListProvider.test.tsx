import { BoxProps } from '@chakra-ui/react';
import { renderHook, act } from '@testing-library/react-hooks';
import KanbanListProvider from '..';
import { useList } from '../..';
import { ICard } from '../../../../data/interfaces/ICard';
import lists from '../../../../data/lists';

describe('useKanbanListProvider hook test', () => {
  const mockedList = lists[0];

  it('should be the initial card value state equal mockedList', () => {
    const wrapper = ({ children }: BoxProps) => (
      <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
    );
    const { result } = renderHook(() => useList(), { wrapper });

    act(() => {
      result.current?.list;
    });

    expect(result.current?.list.cards).toBe(mockedList.cards as ICard[]);
  });

  it('addCard, Should contain one card with task equal (My task) in the list cards', () => {
    const wrapper = ({ children }: BoxProps) => (
      <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
    );
    const { result } = renderHook(() => useList(), { wrapper });

    act(() => {
      result.current?.addCard('My task');
    });
    const response = result.current?.list.cards.filter((card) => card.task === 'My task');
    expect(response?.length).toBe(1);
  });
  it('removeCard, Should remove card the list of cards', () => {
    const wrapper = ({ children }: BoxProps) => (
      <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
    );
    const { result } = renderHook(() => useList(), { wrapper });

    const mockedId = mockedList.cards[0].id;
    act(() => {
      result.current?.removeCard(mockedId);
    });

    const response = result.current?.list.cards.filter((card) => card.id === mockedId);
    expect(response?.length).toBe(0);
  });
});
