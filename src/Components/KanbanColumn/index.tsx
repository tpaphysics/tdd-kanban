import React from 'react';
import { IColumn } from '../../data/interfaces/IColumn';
import KanbanColumnContainer from '../KanbanColumnContainer/KanbanColumnContainer';
import FormAddList from '../FormAddList/FormAddList';
import KanbanColumnProvider from '../../Hooks/useColumn/Provider';
import KanbanListsContainer from '../KanbanListsContainer/KanbanListsContainer';
import { KanbanColumnProps } from './interface';

function KanbanColumn({ initialColumn }: KanbanColumnProps) {
  return (
    <KanbanColumnProvider initialColumn={initialColumn}>
      <KanbanColumnContainer>
        <FormAddList />
        <KanbanListsContainer />
      </KanbanColumnContainer>
    </KanbanColumnProvider>
  );
}

export default KanbanColumn;
