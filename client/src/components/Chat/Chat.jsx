import { Badge, Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import MessageBox from './MessageBox';
import MessageForm from './MessageForm';

import { State } from '../../Context/Provider';

function Chat() {
  const { user, selectedChat, selectedLoadingChat } = State();

  const { username, avatar } = selectedChat
    ? selectedChat.users.find((u) => u._id !== user._id)
    : '';

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
          <Header username={username} avatar={avatar} />
          <MessageBox chatId={selectedChat._id} />
          <MessageForm chatId={selectedChat._id} />
        </Box>
      ) : selectedLoadingChat ? (
        <Box
          d={{ base: selectedChat ? 'flex' : 'none', md: 'flex' }}
          h="100%"
          flex="7"
          bg="#0f0f0f"
          flexDir="column"
          overflow="hidden"
        >
          <Header
            username={selectedLoadingChat.username}
            avatar={selectedLoadingChat.avatar}
          />
          <MessageBox />
          <MessageForm />
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
