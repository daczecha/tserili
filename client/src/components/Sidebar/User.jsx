import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Heading,
  HStack,
  Spinner,
  StackItem,
  Text,
} from '@chakra-ui/react';
import { accessChat } from '../../services/chatServices';
import { State } from '../../Context/Provider';
import { useState } from 'react';

function User({ hoverColor, bgColor, data }) {
  const {
    user,
    setQuery,
    setSearchResults,
    setSelectedChat,
    contacts,
    setContacts,
  } = State();

  const { username, avatar, email, _id } = data;

  const [loading, setLoading] = useState(false);

  const handleAccessChat = async () => {
    setLoading(true);
    try {
      let newContact = await accessChat(user.token, _id);

      setQuery('');
      setSearchResults([]);

      if (!contacts.find((c) => c._id === newContact._id)) {
        setContacts([...contacts, newContact]);
      }
      setLoading(false);
      setSelectedChat(newContact);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <StackItem
        onClick={handleAccessChat}
        _hover={{
          cursor: 'pointer',
          background: hoverColor,
        }}
        h="80px"
        bg={bgColor}
        color="white"
        borderRadius="14px"
      >
        <HStack display="flex" alignItems="center" w="100%" h="100%" p="10px">
          <Avatar size="md" name={username} src={avatar}>
            <AvatarBadge borderColor={bgColor} boxSize="0.9em" bg="green.500" />
          </Avatar>
          <Box p="2px" w="100%">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading fontSize="md" font="bold">
                {username}
              </Heading>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="md" color="gray">
                {email}
              </Text>
            </Flex>
          </Box>
        </HStack>
      </StackItem>
      {loading ? (
        <Flex
          p="10px"
          w="100%"
          h="100%"
          justify="center"
          align="center"
          color="white"
        >
          <Spinner color="white" size="xs"></Spinner>
        </Flex>
      ) : null}
    </>
  );
}

export default User;
