import { VStack, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import { useCounter } from './hooks/userCounter';

function Counter() {
  const { count, decrement, increment } = useCounter();
  return (
    <VStack w='100vw' h='100vh' justifyContent='center'>
      <h1>Value={count}</h1>
      <HStack>
        <Button colorScheme='blackAlpha' onClick={decrement}>
          Decrement
        </Button>
        <Button colorScheme='purple' onClick={increment}>
          Increment
        </Button>
      </HStack>
    </VStack>
  );
}

export default Counter;
