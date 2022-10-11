import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import React from 'react';
import EditableCard from '../EditableCard';
import FormAddCard from '../FormAddCard';
import KanbanListHeader from '../KanbanListHeader/KanbanListHeader';

function KanbanList() {
  const list = { id: '11', title: '📝  To Do', bgList: 'BLUE', tag: 'top', cards: [] };
  return (
    <Box
      as={Flex}
      w='315px'
      bg={list.bgList}
      alignItems='center'
      p='7px 20px 0 20px'
      borderRadius='5px'
      flexDir='column'
      borderTop='3px solid'
      borderTopColor='RGBA2'
    >
      <KanbanListHeader />
      <VStack mt='8px'>
        <EditableCard />
        <EditableCard />
      </VStack>
      <FormAddCard />
    </Box>
  );
}

export default KanbanList;
