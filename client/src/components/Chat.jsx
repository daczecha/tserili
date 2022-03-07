import { Badge, Box, Flex } from '@chakra-ui/react';
import { ChatState } from '../Context/ChatProvider';
import Header from './Header';
import MessageBox from './MessageBox';

function Chat() {
  const { selectedChat } = ChatState();
  return (
    <>
      {selectedChat ? (
        <Box
          d={{ base: selectedChat ? 'flex' : 'none', md: 'flex' }}
          h="100%"
          flex="7"
          bg="#0f0f0f"
          flexDir="column"
          overflow="hidden"
        >
          <Header />
          <MessageBox />
        </Box>
      ) : (
        <Flex
          d={{ base: 'none', md: 'flex' }}
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
