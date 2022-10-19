import React from 'react';
import { useColumn } from '../../Hooks/useColumn';
import EmptyLists from '../EmptyLists/EmprtyLists';
import { Draggable } from 'react-beautiful-dnd';

import KanbanList from '../KanbanList';

function KanbanListsContainer() {
  const { column } = useColumn();
  return (
    <>
      {column.lists.length == 0 ? (
        <EmptyLists />
      ) : (
        column.lists.map((list, index) => (
          <Draggable
            draggableId={`columnId:${column.id},listId:${list.id}`}
            key={list.id}
            index={index}
          >
            {(provided) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <KanbanList list={list} />
              </div>
            )}
          </Draggable>
        ))
      )}
    </>
  );
}

export default KanbanListsContainer;
