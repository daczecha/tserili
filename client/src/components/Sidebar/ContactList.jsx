import { VStack } from '@chakra-ui/react';
import { State } from '../../Context/Provider';

import ListLoading from '../Loading/ListLoading';

import Contact from './Contact';

function ContactList() {
  const { contacts, selectedChat } = State();

  const renderContacts = contacts.map((c) => (
    <Contact
      key={c._id}
      selected={c._id === selectedChat._id ? true : false}
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
      {contacts.length > 0 ? renderContacts : <ListLoading />}
    </VStack>
  );
}

export default ContactList;
