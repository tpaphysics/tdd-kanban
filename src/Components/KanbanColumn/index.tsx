import { VStack, Flex, Icon, Box } from '@chakra-ui/react';
import React from 'react';
import { MdAddChart } from 'react-icons/md';
import { IColumn } from '../../data/interfaces/IColumn';
import KanbanColumnHeader from '../KanbanColumnHeader/KanbanColumnHeader';
import KanbanList from '../KanbanList';
interface KanbanColumnProps {
  initialColumn: IColumn;
}

function KanbanColumn({ initialColumn: column }: KanbanColumnProps) {
  return (
    <VStack bg='blackAlpha.200' px='2' key={column.id} py='2' borderRadius='5px'>
      <KanbanColumnHeader />
      {column.lists.map((list) => (
        <KanbanList list={list} key={list.id} />
      ))}
    </VStack>
  );
}

export default KanbanColumn;
