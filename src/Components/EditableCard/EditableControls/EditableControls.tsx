import { ButtonGroup, Flex, IconButton, useEditableControls } from '@chakra-ui/react';
import { CheckIcon, EditIcon, CloseIcon } from '@chakra-ui/icons';

import React from 'react';

function EditableControls() {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
    useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent='center' size='sm'>
      <IconButton icon={<CheckIcon />} {...(getSubmitButtonProps() as any)} />
      <IconButton icon={<CloseIcon />} {...(getCancelButtonProps() as any)} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent='center' bg='red'>
      <IconButton size='sm' icon={<EditIcon />} {...(getEditButtonProps() as any)} />
    </Flex>
  );
}

export default EditableControls;
