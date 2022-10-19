import { Button, Flex, HStack, Text, Link } from '@chakra-ui/react';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanColumnsContainer from './Components/KanbanColumnsContainer/KanbanColumnsContainer';
import KanbanProvider from './Hooks/useKanban/Provider';

function App() {
  return (
    <Flex
      w='100vw'
      h='100%'
      minH='100vh'
      bgImage='url(scene.svg)'
      flexDir='column'
      backgroundRepeat='no-repeat'
      bgPosition='bottom'
      backgroundPosition='95% 80%'
      //justifyContent={'center'}
    >
      <Flex
        w='100%'
        minW='100vw'
        h='50px'
        alignItems='center'
        justifyContent='center'
        bgGradient='linear(to-r, TEAL, PURPLE)'
      >
        <Text fontWeight='500' color='RGBA1'>
          Build faster your tasks with TDD Kanban 💎
        </Text>
        <Link
          href='https://github.com/tpaphysics/tdd-kanban'
          _hover={{ textDecor: 'none' }}
          target='_blank'
        >
          <Button size='sm' ml='14px' colorScheme='whiteAlpha'>
            Know more
          </Button>
        </Link>
      </Flex>
      <HStack alignItems='baseline' mt='4' mb='2' h='100%' mx='auto' flex='1'>
        <DragDropContext onDragEnd={console.log}>
          <KanbanProvider>
            <KanbanColumnsContainer />
          </KanbanProvider>
        </DragDropContext>
      </HStack>
    </Flex>
  );
}

export default App;
