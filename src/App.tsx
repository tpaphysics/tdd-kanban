import { Box, Button, Flex, HStack, VStack, Icon, Text, Avatar, Link } from '@chakra-ui/react';
import KanbanList from './Components/KanbanList';
import columns from './data/columns';
import { MdAddChart } from 'react-icons/md';
import lists from './data/lists';
import images from './data/images';

function App() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      bgImage='url(scene.svg)'
      flexDir='column'
      backgroundRepeat='no-repeat'
      bgPosition='bottom'
      backgroundPosition='95% 80%'
      //justifyContent={'center'}
    >
      <Flex
        w='100%'
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
      <HStack alignItems='baseline' mt='4' mb='2' h='100%' mx='auto'>
        {columns.map((column) => (
          <VStack bg='blackAlpha.200' px='2' key={column.id} py='2' borderRadius='5px'>
            <Box as={Flex} w='100%' py='4px' alignItems='center' borderRadius='5px' h='26px'>
              <Icon
                as={MdAddChart}
                color='blackAlpha.400'
                w='24px'
                h='24px'
                ml='auto'
                cursor='pointer'
              />
            </Box>
            {column.lists.map((list) => (
              <KanbanList list={list} key={list.id} />
            ))}
          </VStack>
        ))}
      </HStack>
    </Flex>
  );
}

export default App;
