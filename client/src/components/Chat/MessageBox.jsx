import { Spinner, VStack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { State } from '../../Context/Provider';

import Message from './Message';

import { io } from 'socket.io-client';

function MessageBox({ chatId, members }) {
  const { user, messages, newMessages, setMessages, contacts } = State();

  const thisNewMessages = newMessages.filter((m) => m.chatId === chatId);

  const [arrivalMessage, setArrivalMessage] = useState(null);

  const scrollRef = useRef();

  const socket = useRef(io('ws://localhost:8900')); 

  useEffect(()=>socket.current =io('ws://localhost:8900'),[])

  useEffect(() => {
    socket.current.on('getMessage', (data) => {
      console.log('yay')
      setArrivalMessage({
        sender: data.senderId,
        content: data.content,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      members.includes(arrivalMessage.sender) &&
      setMessages([contacts.find((c) => c._id === chatId).messages, arrivalMessage]);
  }, [arrivalMessage, chatId]);

  useEffect(() => {
    setMessages(contacts.find((c) => c._id === chatId).messages);
    scrollRef.current?.scrollIntoView();

    //eslint-disable-next-line
  }, [chatId]);


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
