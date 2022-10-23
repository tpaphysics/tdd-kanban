import React from 'react';
import { useColumn } from '../../Hooks/useColumn';
import { Draggable } from 'react-beautiful-dnd';

import KanbanList from '../KanbanList';

function KanbanListsContainer() {
  const { column } = useColumn();
  return (
    <>
      {column.lists.map((list, index) => (
        <Draggable draggableId={list.id} key={list.id} index={index}>
          {(provided) => (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <KanbanList list={list} />
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
}

export default KanbanListsContainer;
