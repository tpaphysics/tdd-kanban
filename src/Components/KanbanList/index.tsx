import React from 'react';
import FormAddCard from '../FormAddCard';
import KanbanListHeader from '../KanbanListHeader';
import KanbanCardsContainer from '../KanbanCardsContainer';
import KanbanListContainer from '../KanbanListContainer/KanbanListContainer';
import { BoxProps } from '@chakra-ui/react';

function KanbanList({ ...props }: BoxProps) {
  return (
    <KanbanListContainer {...props}>
      <KanbanListHeader />
      <KanbanCardsContainer />
      <FormAddCard />
    </KanbanListContainer>
  );
}

export default KanbanList;
