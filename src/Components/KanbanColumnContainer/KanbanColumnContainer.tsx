import { StackProps, VStack } from '@chakra-ui/react';
import React from 'react';
import columns from '../../data/columns';

function KanbanColumnContainer({ children }: StackProps) {
  const column = columns[0];
  return (
    <VStack bg='blackAlpha.200' px='2' py='2' borderRadius='5px'>
      {children}
    </VStack>
  );
}

export default KanbanColumnContainer;
