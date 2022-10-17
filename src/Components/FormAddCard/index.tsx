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
  const { list, show, handleToogle, newTask, handleChange, handleClick } = useFormAddCard();

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
          Add task
        </Text>
      </Box>
      <Collapse in={show}>
        <Flex pb='20px' flexDir='column'>
          <InputGroup variant='none' size='md' placeholder='New task' w='278px' borderRadius='5px'>
            <InputLeftElement
              pointerEvents='none'
              children={
                <Icon
                  data-testid='input-icon'
                  as={GiGooeyEyedSun}
                  color={newTask == '' ? 'gray.400' : list.bgList}
                />
              }
            />
            <Input
              data-testid='task-input'
              onChange={handleChange}
              value={newTask}
              placeholder='Write a new task'
            />
          </InputGroup>

          <Button
            //disabled={newTask == '' ? true : false}
            data-testid='task-button'
            aria-label={`task-button-${list.id}`}
            colorScheme='whiteAlpha'
            mt='15px'
            float='right'
            type='submit'
            size='md'
            onClick={handleClick}
            disabled={newTask == '' ? true : false}
          >
            Add task
          </Button>
        </Flex>
      </Collapse>
    </>
  );
}

export default FormAddCard;
