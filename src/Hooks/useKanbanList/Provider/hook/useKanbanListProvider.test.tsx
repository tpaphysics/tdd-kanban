import { BoxProps } from '@chakra-ui/react';
import { renderHook, act } from '@testing-library/react-hooks';
import KanbanListProvider from '..';
import { useKanbanList } from '../..';
import { ICard } from '../../../../data/interfaces/ICard';
import lists from '../../../../data/lists';

describe('useKanbanListProvider hook test', () => {
  const mockedList = lists[0];

  it('should be the initial card value state equal mockedList', () => {
    const wrapper = ({ children }: BoxProps) => (
      <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
    );
    const { result } = renderHook(() => useKanbanList(), { wrapper });

    act(() => {
      result.current?.list;
    });

    expect(result.current?.list.cards).toBe(mockedList.cards as ICard[]);
  });

  it('handleAddCard, Should contain one card with task equal (My task) in the list cards', () => {
    const wrapper = ({ children }: BoxProps) => (
      <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
    );
    const { result } = renderHook(() => useKanbanList(), { wrapper });

    act(() => {
      result.current?.handlerAddCard('My task');
    });
    const response = result.current?.list.cards.filter((card) => card.task === 'My task');
    expect(response?.length).toBe(1);
  });
});
