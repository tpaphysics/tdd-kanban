import React from 'react';
import { Box, Editable, EditableInput, EditablePreview, Flex, Input, Text } from '@chakra-ui/react';

function EditableCard() {
  const card = { id: 1, task: 'Task', tag: 'Tag' };
  const colorTag = 'BLUE';
  return (
    <Box
      display='flex'
      flexDir='column'
      justifyContent='space-between'
      padding='15px'
      borderRadius='5px'
      boxShadow='0px 2px 4px rgba(0, 0, 0, 0.25)'
      bg='WHITE'
      w='275px'
      h='90px'
    >
      <Editable
        defaultValue={card.task}
        fontWeight='500'
        fontSize='16px'
        lineHeight='21px'
        variant='none'
      >
        <EditablePreview />
        <Input
          fontWeight='500'
          fontSize='16px'
          lineHeight='21px'
          as={EditableInput}
          borderRadius='5px'
          focusBorderColor={colorTag}
          px='2px'
          h='28px'
        />
      </Editable>

      <Flex
        w='49px'
        h='24px'
        borderRadius='5px'
        bg={colorTag}
        alignItems='center'
        justifyContent='center'
      >
        <Text fontWeight='700' fontSize='12px' color='WHITE'>
          {card.tag}
        </Text>
      </Flex>
    </Box>
  );
}

export default EditableCard;
