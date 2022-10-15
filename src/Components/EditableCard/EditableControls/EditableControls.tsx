import { ButtonGroup, IconButton, useEditableControls, Box } from '@chakra-ui/react';
import { CheckIcon, EditIcon, CloseIcon } from '@chakra-ui/icons';

import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { useList } from '../../../Hooks/useList';
import { EditableControlsProps } from './interface';

function EditableControls({ card, handleRemoveCard, handleClickCheck }: EditableControlsProps) {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
    useEditableControls();

  const { list } = useList();

  return isEditing ? (
    <ButtonGroup justifyContent='baseline' size='sm' mr='auto' alignItems='center' ml='20px'>
      <Box onClick={handleClickCheck}>
        <IconButton
          color={list.bgList}
          colorScheme='gray'
          size='xs'
          icon={<CheckIcon />}
          data-testid={`check-edit-icon-${card.id}`}
          {...(getSubmitButtonProps() as any)}
        />
      </Box>
      <IconButton
        color={list.bgList}
        colorScheme='gray'
        size='xs'
        icon={<CloseIcon />}
        data-testid={`close-edit-icon-${card.id}`}
        {...(getCancelButtonProps() as any)}
      />
    </ButtonGroup>
  ) : (
    <ButtonGroup justifyContent='baseline' size='sm' mr='auto' alignItems='center'>
      <IconButton
        data-testid={`edit-icon-${card.id}`}
        color={list.bgList}
        colorScheme='gray'
        size='xs'
        icon={<EditIcon />}
        {...(getEditButtonProps() as any)}
      />
      <IconButton
        //onClick={handleRemoveCard}
        color={list.bgList}
        colorScheme='gray'
        size='xs'
        icon={<BsTrashFill />}
        data-testid={`trash-icon-${card.id}`}
        {...(getCancelButtonProps() as any)}
        onClick={handleRemoveCard}
      />
    </ButtonGroup>
  );
}

export default EditableControls;
