/* eslint-disable react/prop-types */
import React from 'react';
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
import EditableControls from './EditableControls/EditableControls';
import { Draggable } from 'react-beautiful-dnd';
import { useColumn } from '../../Hooks/useColumn';

function EditableCard({ card, cardIndex }: EditableCardsProps) {
  //const card = { id: 1, task: 'Task', tag: 'sucess', finished: false };
  //const list. = 'BLUE';

  const {
    list,
    preTask,
    finished,
    handleClickTag,
    handleEditTask,
    handleClickCheck,
    handleClickCloseEdit,
    handleRemoveCard,
  } = useEditableCard(card);
  const { column } = useColumn();

  return (
    <Draggable
      draggableId={`{"columnId":"${column.id}","cardId":"${card.id}"}`}
      key={`draggable-card-${card.id}`}
      index={cardIndex}
    >
      {(provided) => (
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
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Flex alignItems={'center'} justifyContent='space-between'>
            <Editable
              data-testid={`editable-${card.id}`}
              value={preTask}
              fontWeight='500'
              fontSize='16px'
              lineHeight='21px'
              variant='none'
              w='100%'
              isPreviewFocusable={false}
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
                  value={preTask}
                  px='2px'
                  h='28px'
                />
                <EditableControls
                  card={card}
                  handleRemoveCard={handleRemoveCard}
                  handleClickCheck={handleClickCheck}
                  handleClickCloseEdit={handleClickCloseEdit}
                />
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
                  {card.tag}
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
      )}
    </Draggable>
  );
}

export default EditableCard;
