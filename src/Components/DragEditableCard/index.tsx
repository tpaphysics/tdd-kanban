import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useColumn } from '../../Hooks/useColumn';
import EditableCard from '../EditableCard';
import { DragEditableCardProps } from './interface';

function DragEditableCard({ card, cardIndex }: DragEditableCardProps) {
  const { column } = useColumn();
  return (
    <Draggable
      draggableId={`{"columnId":"${column.id}","cardId":"${card.id}"}`}
      key={`draggable-card-${card.id}`}
      index={cardIndex}
    >
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <EditableCard card={card} />
        </div>
      )}
    </Draggable>
  );
}

export default DragEditableCard;
