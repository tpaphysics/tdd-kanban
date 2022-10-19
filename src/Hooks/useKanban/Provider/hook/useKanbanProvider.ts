import { useCallback, useState } from 'react';
import uuid from 'react-uuid';

import { ICard } from '../../../../data/interfaces/ICard';
import { IColumn } from '../../../../data/interfaces/IColumn';
import { IList } from '../../../../data/interfaces/IList';

export const useKanbanProvider = (initialColumns: IColumn[]) => {
  const [columns, setColumns] = useState(initialColumns);

  const handleUpdateCards = useCallback(
    (column: IColumn, list: IList, updatedCards: ICard[]) => {
      const updatedColumns = columns.map((columnElement) => {
        if (columnElement.id === column.id) {
          columnElement.lists.map((listElement) => {
            if (listElement.id === list.id) {
              listElement.cards = updatedCards;
            }
          });
        }
        return columnElement;
      });

      setColumns(updatedColumns);
    },
    [columns],
  );

  const handleUpdateLists = useCallback(
    (column: IColumn, updatedList: IList[]) => {
      const updatedColumns = columns.map((columnElement) => {
        if (columnElement.id === column.id) {
          columnElement.lists = updatedList;
        }
        return columnElement;
      });

      setColumns(updatedColumns);
    },
    [columns],
  );

  return { columns, handleUpdateCards, handleUpdateLists };
};
