import { Badge, Flex, Spinner, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import { State } from '../../Context/Provider';
import { SocketContext } from '../../Context/SocketContext';

import { getMessages } from '../../services/messageServices';

import Message from './Message';

function MessageBox({ chatId, contactName }) {
  const socket = useContext(SocketContext);
  const { user, messages, newMessages, setMessages } = State();

  const [loading, setLoading] = useState(false);

  const thisNewMessages = newMessages.filter((m) => m.chatId === chatId);

  const scrollRef = useRef();

  useEffect(() => {
    socket.on('getMessage', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    setLoading(true);
    setMessages([]);

    const fetchMessages = async () => {
      try {
        const data = await getMessages(user.token, chatId, cancelTokenSource);
        setMessages(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMessages();

    return () => {
      cancelTokenSource.cancel();
    };
    //eslint-disable-next-line
  }, [chatId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [newMessages, messages]);

  const renderMessages = messages
    ? messages.map((m) => {
        const received = m.sender._id !== user._id;
        return (
          <Message
            key={m._id}
            content={m.content}
            received={received}
            sentSuccessfull={true}
          />
        );
      })
    : [];

  return (
    <VStack
      spacing="5px"
      p="5px 20px 20px 20px"
      width="100%"
      height="100%"
      overflowY="auto"
      pos="relative"
    >
      {loading ? (
        <Flex
          m="0"
          p="0"
          pos="absolute"
          bg="#0F0F0F"
          h="99%"
          w="100%"
          justify="center"
          align="center"
          zIndex={'999'}
        >
          <Spinner />
        </Flex>
      ) : null}

      {!renderMessages.length && !thisNewMessages.length && !loading ? (
        <Flex
          m="0"
          p="0"
          pos="absolute"
          bg="#0F0F0F"
          h="99%"
          w="100%"
          justify="center"
          align="center"
        >
          <Badge borderRadius="5px" p="5px" bg="#222" color="white">
            Send you first message to {contactName}
          </Badge>
        </Flex>
      ) : (
        renderMessages
      )}

      {thisNewMessages
        ? thisNewMessages.map((m) => (
            <Message
              key={m.content}
              sentSuccessfull={false}
              received={false}
              content={m.content}
            />
          ))
        : null}
      <div ref={scrollRef} style={{ visibility: 'none' }}></div>
    </VStack>
  );
}

export default MessageBox;
