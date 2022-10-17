import { Flex, Icon, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { useList } from '../../Hooks/useList';

function EmptyCards() {
  const { list } = useList();
  return (
    <Box
      cusor='pointer'
      as={Flex}
      alignItems='center'
      justifyContent='center'
      w='275px'
      h='90px'
      borderRadius='5px'
      bg={list.bgList === 'BLACK' ? 'whiteAlpha.200' : 'blackAlpha.200'}
    >
      <Text
        fontSize='16px'
        fontFamily='Pacifico'
        color={list.bgList === 'BLACK' ? 'whiteAlpha.400' : 'blackAlpha.400'}
      >
        You don't have tasks
      </Text>
      <Icon
        ml='16px'
        aria-label='add-new-list'
        as={FaTasks}
        color={list.bgList === 'BLACK' ? 'whiteAlpha.400' : 'blackAlpha.400'}
        w='30px'
        h='30px'
      />
    </Box>
  );
}

export default EmptyCards;
