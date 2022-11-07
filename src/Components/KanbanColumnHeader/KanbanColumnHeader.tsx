import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import FormAddList from '../FormAddList/FormAddList';

function KanbanColumnHeader() {
  return (
    <Box as={Flex} w='100%' py='4px' alignItems='center' borderRadius='5px' h='26px'>
      <FormAddList />
    </Box>
  );
}

export default KanbanColumnHeader;
