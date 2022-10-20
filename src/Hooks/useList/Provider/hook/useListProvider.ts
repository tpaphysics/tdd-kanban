import { useCallback, useState } from 'react';
import { IList } from '../../../../data/interfaces/IList';
import uuid from 'react-uuid';
import { ICard } from '../../../../data/interfaces/ICard';
import { useColumn } from '../../../useColumn';
import { useKanban } from '../../../useKanban';

export const useListProvider = (initialList: IList) => {
  const [list] = useState(initialList);
  const { column } = useColumn();
  const { handleUpdateCards } = useKanban();

  const addCard = useCallback(
    (newTask: string) => {
      const { cards } = list;
      const newCard = { id: uuid(), task: newTask, tag: list.tag, finished: false } as ICard;
      const updatedCards = [...cards, newCard];
      handleUpdateCards(column, list, updatedCards);
    },
    [column, handleUpdateCards, list],
  );
  const removeCard = useCallback(
    (cardId: string) => {
      const updatedCards = list.cards.filter((card) => cardId != card.id);
      handleUpdateCards(column, list, updatedCards);
    },
    [column, handleUpdateCards, list],
  );

  return { list, addCard, removeCard };
};
