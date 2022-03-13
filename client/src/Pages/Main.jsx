import { HStack } from '@chakra-ui/react';

import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';
import { useContext, useEffect } from 'react';
import { State } from '../Context/Provider';
import { getChats } from '../services/chatServices';
import { SocketContext } from '../Context/SocketContext';

function Main() {
  const socket = useContext(SocketContext);

  const { user, contacts, setContacts, setOnlineContacts } = State();

  useEffect(() => {
    socket.emit('joinUser', user);
    socket.on('getUsers', (users) => {
      setOnlineContacts(users);
    });
    //eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getChats(user.token);

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
