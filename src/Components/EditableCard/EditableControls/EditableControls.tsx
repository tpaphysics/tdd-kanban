import { ButtonGroup, IconButton, useEditableControls } from '@chakra-ui/react';
import { CheckIcon, EditIcon, CloseIcon } from '@chakra-ui/icons';

import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { useList } from '../../../Hooks/useList';

function EditableControls() {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
    useEditableControls();

  const { list } = useList();

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
        //onClick={handleRemoveCard}
        color={list.bgList}
        colorScheme='gray'
        size='xs'
        icon={<BsTrashFill />}
        // eslint-disable-next-line react/prop-types
        data-testid={`trash-icon}`}
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
        //onClick={handleRemoveCard}
        color={list.bgList}
        colorScheme='gray'
        size='xs'
        icon={<BsTrashFill />}
        data-testid={`trash-icon}`}
        {...(getCancelButtonProps() as any)}
      />
    </ButtonGroup>
  );
}

export default EditableControls;
