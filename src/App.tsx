import { Flex, HStack, VStack } from '@chakra-ui/react';
import KanbanList from './Components/KanbanList';
import lists from './data/lists';

function App() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      flexDir='column'
      bgImage='url(scene.svg)'
      backgroundRepeat='no-repeat'
      bgPosition='bottom'
      backgroundPosition='95% 80%'
      alignItems='center'
    >
      <VStack alignItems='baseline' flexWrap='wrap'>
        {lists.map((list) => (
          <KanbanList list={list} key={list.id} />
        ))}
      </VStack>
    </Flex>
  );
}

export default App;
