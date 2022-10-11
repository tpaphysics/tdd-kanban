import { Flex } from '@chakra-ui/react';
import KanbanList from './Components/KanbanList';

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
      <KanbanList />
    </Flex>
  );
}

export default App;
