import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { GiRapidshareArrow } from 'react-icons/gi';
import { BsCheckCircle } from 'react-icons/bs';

import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Icon,
  Input,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react';

function EditableCard() {
  const card = { id: 1, task: 'Task', tag: 'sucess' };
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
      <Flex alignItems={'center'} justifyContent='space-between'>
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

        <Icon as={BsTrashFill} color={colorTag} cursor={'pointer'} />
      </Flex>
      <Flex alignItems='center' justifyContent='space-between'>
        <Text>
          <Tag size={'sm'} variant='solid' bg={colorTag} fontStyle='italic'>
            <TagLeftIcon as={GiRapidshareArrow} />
            <TagLabel fontWeight='700' fontSize='12px' color='WHITE'>
              {card.tag}
            </TagLabel>
          </Tag>
        </Text>
        <Flex color={'green.400'} alignItems='center' fontStyle='italic'>
          <Icon as={BsCheckCircle} w='10px' h='12px' />
          <Text ml='2px' fontSize='10px'>
            Finished
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default EditableCard;
