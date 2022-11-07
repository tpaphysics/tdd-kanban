import {
  Button,
  Flex,
  HStack,
  Text,
  Link,
  useBreakpointValue,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanColumn from './Components/KanbanColumn';
import { useKanban } from './Hooks/useKanban';

function App() {
  const { columns, onDragEnd } = useKanban();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [isLargerThan670] = useMediaQuery('(min-width: 670px)');

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
        w='100vw'
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
        <DragDropContext onDragEnd={onDragEnd}>
          {isWideVersion ? (
            columns.map((column) => <KanbanColumn initialColumn={column} key={column.id} />)
          ) : isLargerThan670 ? (
            <VStack>
              <Flex gap='2'>
                {columns.map((column, index) => {
                  if (index < 2) return <KanbanColumn initialColumn={column} key={column.id} />;
                })}
              </Flex>
              <Flex gap='2'>
                {columns.map((column, index) => {
                  if (index > 1) return <KanbanColumn initialColumn={column} key={column.id} />;
                })}
              </Flex>
            </VStack>
          ) : (
            <Flex gap='2' flexDirection='column'>
              {columns.map((column) => (
                <KanbanColumn initialColumn={column} key={column.id} />
              ))}
            </Flex>
          )}
        </DragDropContext>
      </HStack>
    </Flex>
  );
}

export default App;
