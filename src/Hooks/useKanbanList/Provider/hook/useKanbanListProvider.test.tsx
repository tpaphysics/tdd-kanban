import { BoxProps } from '@chakra-ui/react';
import { renderHook, act } from '@testing-library/react-hooks';
import KanbanListProvider from '..';
import { useKanbanList } from '../..';
import { ICard } from '../../../../data/interfaces/ICard';
import lists from '../../../../data/lists';

it('should be the initial card value state equal mockedList', () => {
  const mockedList = lists[0];
  const wrapper = ({ children }: BoxProps) => (
    <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
  );
  const { result } = renderHook(() => useKanbanList(), { wrapper });

  act(() => {
    result.current?.list;
  });

  expect(result.current?.list.cards).toBe(mockedList.cards as ICard[]);
});
