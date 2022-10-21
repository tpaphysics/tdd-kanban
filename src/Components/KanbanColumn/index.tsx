import React from 'react';
import KanbanColumnContainer from '../KanbanColumnContainer/KanbanColumnContainer';
import FormAddList from '../FormAddList/FormAddList';
import KanbanColumnProvider from '../../Hooks/useColumn/Provider';
import KanbanListsContainer from '../KanbanListsContainer/KanbanListsContainer';
import { StrictModeDroppable } from '../StrictModeDroppable';
import { Box, BoxProps } from '@chakra-ui/react';
import { IColumn } from '../../data/interfaces/IColumn';

interface KanbanColumnProps extends BoxProps {
  initialColumn: IColumn;
}

function KanbanColumn({ initialColumn, ...props }: KanbanColumnProps) {
  return (
    <KanbanColumnProvider initialColumn={initialColumn} {...props}>
      <StrictModeDroppable
        droppableId={`{"columnId":"${initialColumn.id}","listId":""}`}
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
