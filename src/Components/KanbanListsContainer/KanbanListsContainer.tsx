import React from 'react';
import { useColumn } from '../../Hooks/useColumn';
import { Draggable } from 'react-beautiful-dnd';
import DragKanbanList from '../DragKanbanList';

function KanbanListsContainer() {
  const { column } = useColumn();
  return (
    <>
      {column.lists.map((list, index) => (
        <Draggable draggableId={list.id} key={list.id} index={index}>
          {(provided) => (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <DragKanbanList list={list} key={list.id} />
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
}

export default KanbanListsContainer;
