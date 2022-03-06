import { HStack } from '@chakra-ui/react';

import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

function Main() {
  return (
    <HStack bg="#0f0f0f" spacing="1px" h="100%" w="100%">
      <Sidebar />
      <Chat />
    </HStack>
  );
}

export default Main;
