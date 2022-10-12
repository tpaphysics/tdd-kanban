import { useCallback, useState } from 'react';
import { IList } from '../../../../data/interfaces/IList';
import uuid from 'react-uuid';
import { ICard } from '../../../../data/interfaces/ICard';

export const useListProvider = (initialList: IList) => {
  const [cards, setCards] = useState(initialList.cards);
  const list = { ...initialList, cards };

  const addCard = useCallback(
    (newTask: string) => {
      const newCard = { id: uuid(), task: newTask, finished: false } as ICard;
      const updated = [...cards, newCard];
      setCards(updated);
    },
    [cards],
  );
  const removeCard = useCallback(
    (cardId: string) => {
      const updated = cards.filter((card) => cardId != card.id);
      setCards(updated);
    },
    [cards],
  );

  return { list, addCard, removeCard };
};
