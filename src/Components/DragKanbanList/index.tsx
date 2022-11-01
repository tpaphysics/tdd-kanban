import React from 'react';
import { useColumn } from '../../Hooks/useColumn';
import KanbanListProvider from '../../Hooks/useList/Provider';
import KanbanList from '../KanbanList';
import { StrictModeDroppable } from '../StrictModeDroppable';
import { DragKanbanListProps } from './interface';

function DragKanbanList({ list }: DragKanbanListProps) {
  const { column } = useColumn();

  return (
    <KanbanListProvider initialList={list}>
      <StrictModeDroppable
        droppableId={`{"listId":"${list.id}","columnId":"${column.id}"}`}
        key={list.id}
        type='card'
      >
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <KanbanList provided={provided} />
          </div>
        )}
      </StrictModeDroppable>
    </KanbanListProvider>
  );
}

export default DragKanbanList;
