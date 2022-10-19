import { useCallback, useState } from 'react';
import uuid from 'react-uuid';
import { IColumn } from '../../../../data/interfaces/IColumn';
import { IList } from '../../../../data/interfaces/IList';
import { useKanban } from '../../../useKanban';

export const useColumnProvider = (initialColumn: IColumn) => {
  const [column] = useState(initialColumn);

  const { handleUpdateLists } = useKanban();

  const addList = useCallback(
    ({ title, bgList, tag }: Omit<IList, 'id' | 'cards'>) => {
      const { lists } = column;
      const newList = { id: uuid(), title, bgList, tag, cards: [] } as IList;
      const updatedLists = [...lists, newList];
      handleUpdateLists(column, updatedLists);
    },
    [column, handleUpdateLists],
  );
  const removeList = useCallback(
    (listId: string) => {
      const { lists } = column;
      const updatedLists = lists.filter((list) => listId != list.id);
      handleUpdateLists(column, updatedLists);
    },
    [column, handleUpdateLists],
  );

  return { column, addList, removeList };
};
