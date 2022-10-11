import { VStack } from '@chakra-ui/react';
import React from 'react';
import EditableCard from '../EditableCard';

function KanbanCardsContainer() {
  return (
    <VStack mt='8px'>
      <EditableCard />
      <EditableCard />
    </VStack>
  );
}

export default KanbanCardsContainer;
