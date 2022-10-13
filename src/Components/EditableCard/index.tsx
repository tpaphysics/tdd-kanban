/* eslint-disable react/prop-types */
import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { GiRapidshareArrow, GiSupersonicArrow } from 'react-icons/gi';
import { BsCheckCircle } from 'react-icons/bs';
import { CheckIcon, EditIcon, CloseIcon } from '@chakra-ui/icons';

import {
  Box,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Icon,
  IconButton,
  Input,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useEditableControls,
} from '@chakra-ui/react';
import { useEditableCard } from './hook/useEditableCard';
import { EditableCardsProps } from './interface';

function EditableCard({ card }: EditableCardsProps) {
  //const card = { id: 1, task: 'Task', tag: 'sucess', finished: false };
  //const list. = 'BLUE';

  const { list, task, finished, handleClickTag, handleEditTask, handleOnBlur, handleRemoveCard } =
    useEditableCard(card);

  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
      useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent='baseline' size='sm' mr='auto' alignItems='center' ml='20px'>
        <IconButton
          color={list.bgList}
          colorScheme='gray'
          size='xs'
          icon={<CheckIcon />}
          {...(getSubmitButtonProps() as any)}
        />
        <IconButton
          color={list.bgList}
          colorScheme='gray'
          size='xs'
          icon={<CloseIcon />}
          {...(getCancelButtonProps() as any)}
        />
        <IconButton
          onClick={handleRemoveCard}
          color={list.bgList}
          colorScheme='gray'
          size='xs'
          icon={<BsTrashFill />}
          // eslint-disable-next-line react/prop-types
          data-testid={`trash-icon-${card.id}`}
          {...(getCancelButtonProps() as any)}
        />
      </ButtonGroup>
    ) : (
      <ButtonGroup justifyContent='baseline' size='sm' mr='auto' alignItems='center'>
        <IconButton
          color={list.bgList}
          colorScheme='gray'
          size='xs'
          icon={<EditIcon />}
          {...(getEditButtonProps() as any)}
        />
        <IconButton
          onClick={handleRemoveCard}
          color={list.bgList}
          colorScheme='gray'
          size='xs'
          icon={<BsTrashFill />}
          data-testid={`trash-icon-${card.id}`}
          {...(getCancelButtonProps() as any)}
        />
      </ButtonGroup>
    );
  }

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
          w='100%'
        >
          <Flex>
            <EditablePreview
              cursor='pointer'
              fontFamily='Pacifico'
              fontSize='18px'
              fontStyle='revert-layer'
              fontWeight='400'
              color='blackAlpha.700'
              w='100%'
            />

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
            <EditableControls />
          </Flex>
        </Editable>
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
