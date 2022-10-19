import React from 'react';
import FormAddCard from '../FormAddCard';
import KanbanListHeader from '../KanbanListHeader';
import KanbanCardsContainer from '../KanbanCardsContainer';
import KanbanListContainer from '../KanbanListContainer/KanbanListContainer';
import KanbanListProvider from '../../Hooks/useList/Provider';
import { KanbanListProps } from './interface';
import { StrictModeDroppable } from '../StrictModeDroppable';

function KanbanList({ list }: KanbanListProps) {
  return (
    <KanbanListProvider initialList={list}>
      <StrictModeDroppable droppableId={list.id} key={list.id} type='card'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <KanbanListContainer>
              <KanbanListHeader />
              <KanbanCardsContainer />
              {provided.placeholder}
              <FormAddCard />
            </KanbanListContainer>
          </div>
        )}
      </StrictModeDroppable>
    </KanbanListProvider>
  );
}

export default KanbanList;
