/* eslint-disable react/no-children-prop */
import {
  Box,
  Text,
  Flex,
  Icon,
  Collapse,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import { IoMdAddCircle } from 'react-icons/io';
import { GiGooeyEyedSun } from 'react-icons/gi';
import { AiFillMinusCircle } from 'react-icons/ai';
import React from 'react';
import { useFormAddCard } from './hook/useFormAddCard';

function FormAddCard() {
  const { show, handleToogle, newTask, handleChange } = useFormAddCard();
  return (
    <>
      <Box
        as={Flex}
        w='100%'
        alignItems='center'
        py='10px'
        color='RGBA1'
        _hover={{ color: 'white', transitionDuration: '0.3s' }}
        cursor='pointer'
        onClick={handleToogle}
      >
        {show ? (
          <Icon as={AiFillMinusCircle} data-testid='icon-minus' />
        ) : (
          <Icon as={IoMdAddCircle} data-testid='icon-add' />
        )}
        <Text ml='6px' fontSize='14px' fontWeight='500' lineHeight='21px' textAlign='left'>
          Add card
        </Text>
      </Box>
      <Collapse in={show}>
        <Flex pb='20px' flexDir='column'>
          <InputGroup variant='none' size='md' placeholder='New task' w='278px' borderRadius='5px'>
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={GiGooeyEyedSun} color={newTask == '' ? 'gray.400' : 'BLUE'} />}
            />
            <Input
              onChange={handleChange}
              value={newTask}
              placeholder='Write a new task'
              fontSize='14px'
              fontWeight='500'
              lineHeight='21px'
              textAlign='left'
              _placeholder={{
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '21px',
                color: 'gray.400',
              }}
            />
          </InputGroup>
          <Button colorScheme='whiteAlpha' mt='15px' float='right' type='submit' size='md'>
            Add task
          </Button>
        </Flex>
      </Collapse>
    </>
  );
}

export default FormAddCard;
