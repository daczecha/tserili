import { Badge, Box, Flex } from '@chakra-ui/react';
import { ChatState } from '../Context/ChatProvider';
import Header from './Header';

function Chat() {
  const { selectedChat } = ChatState();
  return (
    <>
      {selectedChat ? (
        <Box
          d={{ base: selectedChat ? 'auto' : 'none', md: 'flex' }}
          h="100%"
          flex="7"
          bg="#0f0f0f"
        >
          <Header />
        </Box>
      ) : (
        <Flex
          d={{ base: 'none' }}
          justifyContent="center"
          alignItems="center"
          h="100%"
          flex="7"
          bg="#0f0f0f"
        >
          <Badge borderRadius="5px" p="5px" bg="#222" color="white">
            Select a chat to start messaging
          </Badge>
        </Flex>
      )}
    </>
  );
}

export default Chat;
