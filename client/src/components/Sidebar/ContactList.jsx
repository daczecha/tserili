import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { State } from '../../Context/Provider';

import { getChats } from '../../services/chatServices';

import ListLoading from '../Loading/ListLoading';

import Contact from './Contact';

function ContactList() {
  const { user, contacts, setContacts, selectedChat } = State();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const data = await getChats(user.token);
        setContacts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    if (!contacts.length) fetchContacts();
    //eslint-disable-next-line
  }, []);

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
      {loading ? <ListLoading /> : renderContacts}
    </VStack>
  );
}

export default ContactList;
