import { useCallback, useState } from 'react';
import uuid from 'react-uuid';
import { IColumn } from '../../../../data/interfaces/IColumn';
import { IList } from '../../../../data/interfaces/IList';

export const useColumnProvider = (initialColumn: IColumn) => {
  const [lists, setLists] = useState(initialColumn.lists);
  const column = { ...initialColumn, lists };

  const addList = useCallback(
    (title: string, bgList: string, tag: string) => {
      const newList = { id: uuid(), title, bgList, tag, cards: [] } as IList;
      const updated = [...lists, newList];
      setLists(updated);
    },
    [lists],
  );
  const removeList = useCallback(
    (listId: string) => {
      const updated = lists.filter((card) => listId != card.id);
      setLists(updated);
    },
    [lists],
  );

  return { column, addList, removeList };
};
