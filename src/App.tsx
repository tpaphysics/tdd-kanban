import { Flex } from '@chakra-ui/react';
import Counter from './Components/Example/Counter/Counter';

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
    ></Flex>
  );
}

export default App;
