import { VStack } from '@chakra-ui/react';
import React from 'react';

import { useList } from '../../Hooks/useList';
import EditableCard from '../EditableCard';
import EmptyCards from '../EmptyCards/EmptyCards';

function KanbanCardsContainer() {
  const { list } = useList();
  return (
    <VStack mt='8px'>
      {list.cards.length == 0 ? (
        <EmptyCards />
      ) : (
        list.cards.map((card, index) => (
          <EditableCard card={card} key={card.id} cardIndex={index} />
        ))
      )}
    </VStack>
  );
}

export default KanbanCardsContainer;
