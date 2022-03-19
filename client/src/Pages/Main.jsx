import { HStack } from '@chakra-ui/react';

import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';
import { useContext, useEffect } from 'react';
import { State } from '../Context/Provider';
import { SocketContext } from '../Context/SocketContext';

function Main() {
  const socket = useContext(SocketContext);

  const { user, setOnlineContacts } = State();

  useEffect(() => {
    socket.emit('joinUser', user);
    socket.on('getUsers', (users) => {
      setOnlineContacts(users);
    });
    //eslint-disable-next-line
  }, [user]);

  return (
    <HStack bg="#0f0f0f" spacing="1px" h="100%" w="100%">
      <Sidebar />
      <Chat />
    </HStack>
  );
}

export default Main;
