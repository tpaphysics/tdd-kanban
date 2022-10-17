import { Flex, Icon, Text, Box } from '@chakra-ui/react';

import React from 'react';
import { RiFileList3Line } from 'react-icons/ri';

function EmptyLists() {
  return (
    <Box
      cusor='pointer'
      as={Flex}
      alignItems='center'
      justifyContent='center'
      w='315px'
      h='90px'
      borderRadius='5px'
      bg='blackAlpha.200'
    >
      <Text fontSize='16px' fontFamily='Pacifico' color='blackAlpha.400'>
        You don't have lists
      </Text>
      <Icon
        ml='16px'
        aria-label='add-new-list'
        as={RiFileList3Line}
        color='blackAlpha.400'
        w='30px'
        h='30px'
      />
    </Box>
  );
}

export default EmptyLists;
