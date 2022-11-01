import React from 'react';
import FormAddCard from '../FormAddCard';
import KanbanListHeader from '../KanbanListHeader';
import KanbanCardsContainer from '../KanbanCardsContainer';
import KanbanListContainer from '../KanbanListContainer/KanbanListContainer';
import { KanbanListProps } from './interface';

function KanbanList({ provided }: KanbanListProps) {
  return (
    <KanbanListContainer>
      <KanbanListHeader />
      <KanbanCardsContainer />
      {provided?.placeholder}
      <FormAddCard />
    </KanbanListContainer>
  );
}

export default KanbanList;
