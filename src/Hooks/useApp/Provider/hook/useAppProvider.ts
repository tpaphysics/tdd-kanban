import { useCallback, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { ICard } from '../../../../data/interfaces/ICard';
import { IColumn } from '../../../../data/interfaces/IColumn';
import { IList } from '../../../../data/interfaces/IList';
import { changePosition } from './utils/utils';

export const useAppProvider = (initialColumns: IColumn[]) => {
  const [columns, setLists] = useState(initialColumns);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      //console.log(result);
      const { type, source, destination, draggableId } = result;

      if (type === 'card' || source.droppableId === destination?.droppableId) {
        const listSourceId = source.droppableId;
        const listSourceIndex = source.index;

        const listDestinationIndex = destination?.index;

        const columnId = JSON.parse(draggableId).columnId;
        //console.log(columnId);

        const workColumn = columns.filter((column) => columnId === column.id);
        const workLists = workColumn[0].lists as IList[];
        const workList = workLists.filter((list) => listSourceId === list.id);
        //console.log(workList);
        const cards = workList[0].cards as ICard[];
        console.log(columns[1].lists[0].cards);

        const updatedCards = changePosition(cards, listSourceIndex, listDestinationIndex as number);
        //console.log(updatedCards);

        //const updatedColumns = [
        //  { id: columnId, lists: [...workLists, { ...workList, cards: updatedCards }] },
        //  ...columns,
        //] as IColumn[];

        ////console.log(updatedColumns);
        //
        //setColumns(updatedColumns);
      }
    },
    [columns],
  );

  const handleUpdateCards = useCallback((updatedColumns: IColumn[]) => {
    setLists(updatedColumns);
  }, []);

  return { columns, handleUpdateCards, onDragEnd };
};
