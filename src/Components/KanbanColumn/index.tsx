import { VStack, Flex, Icon, Box } from '@chakra-ui/react';
import React from 'react';
import { MdAddChart } from 'react-icons/md';
import { IColumn } from '../../data/interfaces/IColumn';
import KanbanColumnContainer from '../KanbanColumnContainer/KanbanColumnContainer';
import KanbanColumnHeader from '../KanbanColumnHeader/KanbanColumnHeader';
import KanbanList from '../KanbanList';
interface KanbanColumnProps {
  initialColumn: IColumn;
}

function KanbanColumn({ initialColumn: column }: KanbanColumnProps) {
  return (
    <KanbanColumnContainer>
      <KanbanColumnHeader />
      {column.lists.map((list) => (
        <KanbanList list={list} key={list.id} />
      ))}
    </KanbanColumnContainer>
  );
}

export default KanbanColumn;
