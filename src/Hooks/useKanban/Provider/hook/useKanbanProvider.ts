import { useCallback, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';

import { ICard } from '../../../../data/interfaces/ICard';
import { IColumn } from '../../../../data/interfaces/IColumn';
import { IList } from '../../../../data/interfaces/IList';
import { changePosition } from './utils/utils';

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

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { type, source, destination } = result;

      if (!destination) return;

      const { listId: listSourceId, columnId: columnSourceId } = JSON.parse(source.droppableId);
      const { listId: listDestinationId, columnId: columnDestinationId } = JSON.parse(
        (destination as any).droppableId,
      );

      const listSourceIndex = source.index;
      const listDestinationIndex = destination?.index;

      if (type === 'card' && columnSourceId === columnDestinationId) {
        columns.map((column) => {
          if (column.id === columnSourceId) {
            column.lists.map((list) => {
              if (list.id === listSourceId) {
                list.cards = changePosition(
                  list.cards,
                  listSourceIndex,
                  listDestinationIndex as number,
                );
              }
            });
          }
        });
      }
      if (type === 'card' && source.droppableId != (destination.droppableId as any)) {
        let removedCard: ICard;
        columns.map((column) => {
          if (column.id === columnSourceId) {
            column.lists.map((list) => {
              if (list.id === listSourceId) {
                [removedCard] = list.cards.splice(listSourceIndex, 1);
              }
            });
          }
        });

        columns.map((column) => {
          if (column.id === columnDestinationId) {
            column.lists.map((list) => {
              if (list.id === listDestinationId) {
                list.cards.splice(listDestinationIndex as any, 0, removedCard);
              }
            });
          }
        });
      }
      if (type === 'list' && columnSourceId === columnDestinationId) {
        columns.map((column) => {
          if (column.id === columnSourceId) {
            column.lists = changePosition(
              column.lists,
              listSourceIndex,
              listDestinationIndex as any,
            );
          }
        });
      }
      if (type === 'list' && columnSourceId !== columnDestinationId) {
        let removedList: IList;
        columns.map((column) => {
          if (column.id === columnSourceId) {
            [removedList] = column.lists.splice(listSourceIndex, 1);
          }
        });

        columns.map((column) => {
          if (column.id === columnDestinationId) {
            column.lists.splice(listDestinationIndex as any, 0, removedList);
          }
        });
      }
    },
    [columns],
  );

  return { columns, handleUpdateCards, handleUpdateLists, onDragEnd };
};
