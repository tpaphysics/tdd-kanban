import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useColumn } from '../../Hooks/useColumn';
import { useList } from '../../Hooks/useList';

//const list = { id: '11', title: '📝  To Do', bgList: 'BLUE', tag: 'top', cards: [] };

function KanbanListHeader() {
  const { list } = useList();
  const { removeList } = useColumn();
  return (
    <Flex alignItems='center' justifyContent='space-between' w='100%'>
      <Text fontSize='16px' fontWeight='700' lineHeight='24.59px' color='WHITE'>
        {list.title}
      </Text>

      <Icon
        as={AiFillCloseCircle}
        color='WHITE'
        cursor='pointer'
        data-testid={`close-list-${list.id}`}
        onClick={() => removeList(list.id)}
      />
    </Flex>
  );
}

export default KanbanListHeader;
