import { BoxProps, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useList } from '../../Hooks/useList';

//const list = { id: '11', title: '📝  To Do', bgList: 'BLUE', tag: 'top', cards: [] };

function KanbanListContainer({ children, ...props }: BoxProps) {
  const { list } = useList();
  return (
    <Box
      {...props}
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
      {children}
    </Box>
  );
}

export default KanbanListContainer;
