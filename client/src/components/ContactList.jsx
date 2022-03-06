import { VStack } from '@chakra-ui/react';

import Contact from './Contact';

function ContactList() {
  return (
    <VStack
      pr="5px"
      pl="5px"
      w="100%"
      spacing="0"
      overflowY="auto"
      align="stretch"
    >
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
      <Contact bgColor="#212121" hoverColor="#2b2b2b" />
    </VStack>
  );
}

export default ContactList;
