import { StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

function KanbanColumnContainer({ children }: StackProps) {
  return (
    <VStack
      bg='blackAlpha.200'
      pb='2'
      pt='1'
      px='2'
      borderRadius='5px'
      h='100%'
      minH='calc(100vh - 80px)'
      w='330px'
    >
      {children}
    </VStack>
  );
}

export default KanbanColumnContainer;
