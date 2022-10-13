/* eslint-disable react/no-children-prop */

import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Icon,
  InputLeftElement,
  InputGroup,
  HStack,
  Circle,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { BsCardChecklist } from 'react-icons/bs';
import { GiGooeyEyedSun } from 'react-icons/gi';
import { MdAddChart, MdLabelOutline } from 'react-icons/md';
import { TbLamp2 } from 'react-icons/tb';
import colors from '../../data/colors';

function FormAddList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newListName, setNewListName] = useState('');
  const [listColor, setListColor] = useState('BLACK');

  const [tagName, setTagName] = useState('');

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Icon
        as={MdAddChart}
        onClick={onOpen}
        color='blackAlpha.400'
        w='20px'
        h='20px'
        ml='auto'
        mb='-1'
        cursor='pointer'
      />

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new list</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <InputGroup size='md' placeholder='New task' borderRadius='5px'>
                <InputLeftElement
                  pointerEvents='none'
                  children={
                    <Icon
                      data-testid='input-icon'
                      as={BsCardChecklist}
                      color={newListName === '' ? 'gray.400' : 'purple.400'}
                    />
                  }
                />
                <Input
                  ref={initialRef}
                  focusBorderColor='purple.400'
                  data-testid='task-input'
                  onChange={(event) => setNewListName(event.target.value as string)}
                  value={newListName}
                  placeholder='List name'
                />
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <InputGroup size='md' placeholder='New task' borderRadius='5px'>
                <InputLeftElement
                  pointerEvents='none'
                  children={
                    <Icon
                      data-testid='input-icon'
                      as={MdLabelOutline}
                      color={tagName === '' ? 'gray.400' : 'purple.400'}
                    />
                  }
                />
                <Input
                  focusBorderColor='purple.400'
                  data-testid='task-input'
                  onChange={(event) => setTagName(event.target.value as string)}
                  value={tagName}
                  placeholder='Tag name'
                />
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontStyle='italic'>
                Color&nbsp;&nbsp;
                <Icon as={TbLamp2} w='18px' h='18px' cursor='pointer' color={listColor} />
              </FormLabel>
              <HStack>
                {colors.map((color) => (
                  <Circle
                    padding='2px'
                    size='28px'
                    bg={color}
                    color='white'
                    key={color}
                    onClick={() => setListColor(color)}
                  >
                    <Icon as={GiGooeyEyedSun} w='12px' h='12px' cursor='pointer' />
                  </Circle>
                ))}
              </HStack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='purple' mr={3}>
              Add list
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default FormAddList;
