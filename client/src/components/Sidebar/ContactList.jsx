import { VStack } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';

import { State } from '../../Context/Provider';
import { SocketContext } from '../../Context/SocketContext';

import Contact from './Contact';
import { updateLatestMessage } from '../../helper_functions';

function ContactList() {
  const socket = useContext(SocketContext);

  const { contacts, selectedChat, setContacts } = State();

  const renderContacts = contacts.map((c) => {
    return (
      <Contact
        key={c._id}
        selected={c._id === selectedChat._id ? true : false}
        data={c}
      />
    );
  });

  useEffect(() => {
    socket.on('getMessage', (data) => {
      if (contacts.length) {
        const chatId = data.conversation._id;
        setContacts(updateLatestMessage(contacts, chatId, data));
      } else {
        console.log('no contacts');
      }
    });

    //eslint-disable-next-line
  }, []);

  return (
    <VStack
      pr="5px"
      pl="5px"
      w="100%"
      spacing="0"
      overflowY="auto"
      align="stretch"
    >
      {renderContacts}
    </VStack>
  );
}

export default ContactList;
