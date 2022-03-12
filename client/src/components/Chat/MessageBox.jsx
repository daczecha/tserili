import { Spinner, VStack } from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { State } from '../../Context/Provider';
import { SocketContext } from '../../Context/SocketContext';

import Message from './Message';

function MessageBox({ chatId, members }) {
  const socket = useContext(SocketContext);
  const { user, messages, newMessages, setMessages, contacts } = State();

  const thisNewMessages = newMessages.filter((m) => m.chatId === chatId);

  const scrollRef = useRef();

  useEffect(() => {
    socket.on('getMessage', (data) => {
      console.log(data.sender.username, '---->', data.content);
    });
  }, []);

  useEffect(() => {
    setMessages(contacts.find((c) => c._id === chatId).messages);
    //eslint-disable-next-line
  }, [chatId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [newMessages]);

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
      justify={messages ? '' : 'center'}
      align={messages ? '' : 'center'}
    >
      {messages ? renderMessages : <Spinner color="gray" size="xl" />}
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
