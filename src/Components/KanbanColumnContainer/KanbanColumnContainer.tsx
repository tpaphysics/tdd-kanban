import { StackProps, useMediaQuery, VStack } from '@chakra-ui/react';
import React from 'react';

function KanbanColumnContainer({ children }: StackProps) {
  const [isLargerThan1365] = useMediaQuery('(min-width: 1365px)');

  return (
    <VStack
      bg='blackAlpha.200'
      pb='2'
      pt='1'
      px='2'
      borderRadius='5px'
      h='100%'
      minH={isLargerThan1365 ? 'calc(100vh - 80px)' : 'calc(50vh - 80px)'}
      w='330px'
    >
      {children}
    </VStack>
  );
}

export default KanbanColumnContainer;
