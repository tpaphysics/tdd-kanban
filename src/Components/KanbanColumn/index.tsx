import React from 'react';
import KanbanColumnContainer from '../KanbanColumnContainer/KanbanColumnContainer';
import FormAddList from '../FormAddList/FormAddList';
import KanbanColumnProvider from '../../Hooks/useColumn/Provider';
import KanbanListsContainer from '../KanbanListsContainer/KanbanListsContainer';
import { KanbanColumnProps } from './interface';
import { StrictModeDroppable } from '../StrictModeDroppable';
import { Box } from '@chakra-ui/react';

function KanbanColumn({ initialColumn }: KanbanColumnProps) {
  return (
    <KanbanColumnProvider initialColumn={initialColumn}>
      <StrictModeDroppable
        droppableId={initialColumn.id}
        key={`droppable-list-${initialColumn.id}`}
        type='list'
      >
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            <KanbanColumnContainer>
              <FormAddList />
              <KanbanListsContainer />
              {provided.placeholder}
            </KanbanColumnContainer>
          </Box>
        )}
      </StrictModeDroppable>
    </KanbanColumnProvider>
  );
}

export default KanbanColumn;
