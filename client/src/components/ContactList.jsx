import { VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { State } from '../Context/Provider';

import { getChats } from '../services/chatServices';

import Contact from './Contact';

function ContactList() {
  const { user, contacts, setContacts, selectedChat } = State();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getChats(user.token);
        console.log(data);
        setContacts(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (!contacts.length) fetchContacts();
    //eslint-disable-next-line
  }, []);

  const renderContacts = contacts.map((c) => (
    <Contact
      key={c._id}
      selected={c._id === selectedChat ? true : false}
      data={c}
    />
  ));

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
