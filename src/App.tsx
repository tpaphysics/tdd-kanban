import { Flex } from '@chakra-ui/react';
import EditableCard from './Components/EditableCard';

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
      <EditableCard />
    </Flex>
  );
}

export default App;
