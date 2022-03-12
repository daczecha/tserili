import { HStack } from '@chakra-ui/react';

import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';
import { useContext, useEffect } from 'react';
import { State } from '../Context/Provider';
import { getChats } from '../services/chatServices';
import { getMessages } from '../services/messageServices';

import { SocketContext } from '../Context/SocketContext';

function Main() {
  const socket = useContext(SocketContext);

  const { user, messages, contacts, setMessages, setContacts } = State();

  useEffect(() => {
    socket.emit('joinUser', user);
    socket.on('getUsers', (users) => {
      console.log(users);
    });
  }, [user]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getChats(user.token);

        await data.map(async (c) => {
          const d = await getMessages(user.token, c._id);
          c.messages = d;
          if (messages.length > 0) {
            setMessages((prev) => [...prev, ...d]);
          } else {
            setMessages(d);
          }
        });

        setContacts(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (!contacts.length) fetchContacts();
    //eslint-disable-next-line
  }, []);

  return (
    <HStack bg="#0f0f0f" spacing="1px" h="100%" w="100%">
      <Sidebar />
      <Chat />
    </HStack>
  );
}

export default Main;
