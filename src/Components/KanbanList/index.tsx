import React from 'react';
import FormAddCard from '../FormAddCard';
import KanbanListHeader from '../KanbanListHeader';
import KanbanCardsContainer from '../KanbanCardsContainer';
import KanbanListContainer from '../KanbanListContainer/KanbanListContainer';
import KanbanListProvider from '../../Hooks/useList/Provider';
import { KanbanListProps } from './interface';

function KanbanList({ list, ...props }: KanbanListProps) {
  return (
    <KanbanListProvider initialList={list}>
      <KanbanListContainer {...props}>
        <KanbanListHeader />
        <KanbanCardsContainer />
        <FormAddCard />
      </KanbanListContainer>
    </KanbanListProvider>
  );
}

export default KanbanList;
