import { VStack } from '@chakra-ui/react';
import React from 'react';
import { useList } from '../../Hooks/useList';
import EditableCard from '../EditableCard';

function KanbanCardsContainer() {
  const { list } = useList();
  return (
    <VStack mt='8px'>
      {list.cards.map((card) => (
        <EditableCard card={card} key={card.id} />
      ))}
    </VStack>
  );
}

export default KanbanCardsContainer;
