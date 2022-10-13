import { VStack, Flex, Icon, Box } from '@chakra-ui/react';
import React from 'react';
import { MdAddChart } from 'react-icons/md';
import { IColumn } from '../../data/interfaces/IColumn';
import KanbanList from '../KanbanList';
interface KanbanColumnProps {
  initialColumn: IColumn;
}

function KanbanColumn({ initialColumn: column }: KanbanColumnProps) {
  return (
    <VStack bg='blackAlpha.200' px='2' key={column.id} py='2' borderRadius='5px'>
      <Box as={Flex} w='100%' py='4px' alignItems='center' borderRadius='5px' h='26px'>
        <Icon as={MdAddChart} color='blackAlpha.400' w='24px' h='24px' ml='auto' cursor='pointer' />
      </Box>
      {column.lists.map((list) => (
        <KanbanList list={list} key={list.id} />
      ))}
    </VStack>
  );
}

export default KanbanColumn;
