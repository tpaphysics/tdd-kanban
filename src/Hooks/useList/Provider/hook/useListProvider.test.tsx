import { BoxProps } from '@chakra-ui/react';
import { renderHook, act } from '@testing-library/react-hooks';
import KanbanListProvider from '..';
import { useList } from '../..';
import columns from '../../../../data/columns';
import { ICard } from '../../../../data/interfaces/ICard';
import KanbanColumnProvider from '../../../useColumn/Provider';
import KanbanProvider from '../../../useKanban/Provider';

describe('useKanbanListProvider hook test', () => {
  const mockedColumn = columns[0];
  const mockedList = mockedColumn.lists[0];

  const wrapper = ({ children }: BoxProps) => (
    <KanbanProvider>
      <KanbanColumnProvider initialColumn={mockedColumn}>
        <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
      </KanbanColumnProvider>
    </KanbanProvider>
  );

  it('should be the initial card value state equal mockedList', () => {
    const { result } = renderHook(() => useList(), { wrapper });

    act(() => {
      result.current?.list;
    });

    expect(result.current?.list.cards).toBe(mockedList.cards as ICard[]);
  });

  it('addCard, Should contain one card with task equal (My task) in the list cards', () => {
    const { result } = renderHook(() => useList(), { wrapper });

    act(() => {
      result.current?.addCard('My task');
    });
    const response = result.current?.list.cards.filter((card) => card.task === 'My task');
    expect(response?.length).toBe(1);
  });
  it('removeCard, Should remove card the list of cards', () => {
    const { result } = renderHook(() => useList(), { wrapper });

    const mockedId = mockedList.cards[0].id;
    act(() => {
      result.current?.removeCard(mockedId);
    });

    const response = result.current?.list.cards.filter((card) => card.id === mockedId);
    expect(response?.length).toBe(0);
  });
});
