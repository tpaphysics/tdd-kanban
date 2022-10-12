import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { GiRapidshareArrow, GiSupersonicArrow } from 'react-icons/gi';
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
import { useEditableCard } from './hook/useEditableCard';
import { EditableCardsProps } from './interface';

function EditableCard({ card }: EditableCardsProps) {
  //const card = { id: 1, task: 'Task', tag: 'sucess', finished: false };
  //const list. = 'BLUE';

  const { list, task, finished, handleClickTag, handleEditTask, handleOnBlur, handleRemoveCard } =
    useEditableCard(card);
  return (
    <Box
      data-testid={`card-${card.id}`}
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
          data-testid={`editable-${card.id}`}
          value={task}
          fontWeight='500'
          fontSize='16px'
          lineHeight='21px'
          variant='none'
        >
          <EditablePreview cursor='pointer' />

          <Input
            data-testid={`input-${card.id}`}
            fontWeight='500'
            fontSize='16px'
            lineHeight='21px'
            as={EditableInput}
            borderRadius='5px'
            focusBorderColor={list.bgList}
            onChange={handleEditTask}
            onBlur={handleOnBlur}
            onKeyDown={handleOnBlur}
            value={task}
            px='2px'
            h='28px'
          />
        </Editable>

        <Icon
          onClick={handleRemoveCard}
          as={BsTrashFill}
          color={list.bgList}
          cursor={'pointer'}
          data-testid={`trash-icon-${card.id}`}
        />
      </Flex>
      <Flex alignItems='center' justifyContent='space-between'>
        <Text onClick={handleClickTag} cursor='pointer' data-testid={`tag-${card.id}`}>
          <Tag
            size={'sm'}
            variant='solid'
            bg={list.bgList}
            fontStyle='italic'
            _hover={{ opacity: '0.8', transitionDuration: '0.3s' }}
          >
            <TagLeftIcon as={finished ? GiSupersonicArrow : GiRapidshareArrow} />
            <TagLabel fontWeight='700' fontSize='12px' color='WHITE'>
              {list.tag}
            </TagLabel>
          </Tag>
        </Text>
        {finished && (
          <Flex color={'green.400'} alignItems='center' fontStyle='italic'>
            <Icon as={BsCheckCircle} w='10px' h='12px' />
            <Text ml='2px' fontSize='10px'>
              Finished
            </Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

export default EditableCard;
