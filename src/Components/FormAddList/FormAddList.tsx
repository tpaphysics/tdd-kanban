/* eslint-disable react/no-children-prop */
import {
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
import { BsCardChecklist } from 'react-icons/bs';
import { GiGooeyEyedSun } from 'react-icons/gi';
import { MdAddChart, MdLabelOutline } from 'react-icons/md';
import { GiLightBulb } from 'react-icons/gi';
import colors from '../../data/colors';
import useFormAddList from './hook/useFormAddList';

function FormAddList() {
  const {
    column,
    isOpen,
    onOpen,
    onClose,
    initialRef,
    finalRef,
    title,
    setTitle,
    tag,
    setTag,
    bgList,
    setBgList,
    handleAddList,
  } = useFormAddList();

  return (
    <>
      <Icon
        data-testid={`modal-${column.id}`}
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
                    <Icon as={BsCardChecklist} color={title === '' ? 'gray.400' : 'purple.400'} />
                  }
                />
                <Input
                  data-testid={`title-input-${column.id}`}
                  ref={initialRef}
                  focusBorderColor='purple.400'
                  onChange={(event) => setTitle(event.target.value as string)}
                  value={title}
                  placeholder='List title'
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
                      color={tag === '' ? 'gray.400' : 'purple.400'}
                    />
                  }
                />
                <Input
                  data-testid={`tag-input-${column.id}`}
                  focusBorderColor='purple.400'
                  onChange={(event) => setTag(event.target.value as string)}
                  value={tag}
                  placeholder='Tag name'
                />
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontStyle='italic'>
                Color&nbsp;&nbsp;
                <Icon as={GiLightBulb} w='20px' h='20px' cursor='pointer' color={bgList} />
              </FormLabel>
              <HStack>
                {colors.map((color) => (
                  <Circle
                    aria-label={color}
                    data-testid={`bg-${color}-${column.id}`}
                    padding='2px'
                    size='28px'
                    bg={color}
                    color='white'
                    key={color}
                    onClick={() => setBgList(color)}
                  >
                    <Icon as={GiGooeyEyedSun} w='12px' h='12px' cursor='pointer' />
                  </Circle>
                ))}
              </HStack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              data-testid={`add-list-${column.id}`}
              colorScheme='purple'
              disabled={title == '' || tag == '' ? true : false}
              onClick={handleAddList}
              mr={3}
            >
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
