import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const list = { id: '11', title: '📝  To Do', bgList: 'BLUE', tag: 'top', cards: [] };

function KanbanListHeader() {
  return (
    <Flex alignItems='center' justifyContent='space-between' w='100%'>
      <Text fontSize='16px' fontWeight='700' lineHeight='24.59px' color='WHITE'>
        {list.title}
      </Text>

      <Icon as={AiFillCloseCircle} color='WHITE' cursor='pointer' />
    </Flex>
  );
}

export default KanbanListHeader;