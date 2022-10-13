import { Box, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { MdAddChart } from 'react-icons/md';

function KanbanColumnHeader() {
  return (
    <Box as={Flex} w='100%' py='4px' alignItems='center' borderRadius='5px' h='26px'>
      <Icon as={MdAddChart} color='blackAlpha.400' w='24px' h='24px' ml='auto' cursor='pointer' />
    </Box>
  );
}

export default KanbanColumnHeader;
