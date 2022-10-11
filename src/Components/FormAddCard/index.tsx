import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { IoMdAddCircle } from 'react-icons/io';
import React from 'react';

function FormAddCard() {
  return (
    <Box
      as={Flex}
      w='100%'
      alignItems='center'
      py='10px'
      color='RGBA1'
      _hover={{ color: 'white', transitionDuration: '0.3s' }}
      cursor='pointer'
    >
      <Icon as={IoMdAddCircle} />
      <Text ml='6px' fontSize='14px' fontWeight='500' lineHeight='21px' textAlign='left'>
        Adicionar outro cartão
      </Text>
    </Box>
  );
}

export default FormAddCard;
