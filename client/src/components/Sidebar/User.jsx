import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Heading,
  HStack,
  StackItem,
  Text,
} from '@chakra-ui/react';
import { accessChat } from '../../services/chatServices';
import { State } from '../../Context/Provider';

function User({ hoverColor, bgColor, data }) {
  const {
    user,
    setQuery,
    setSearchResults,
    setSelectedChat,
    contacts,
    setContacts,
    setSelectedLoadingChat,
  } = State();
  const { username, avatar, email } = data;

  const handleAccessChat = async () => {
    try {
      setSelectedLoadingChat({ username, avatar });

      setQuery('');
      setSearchResults([]);

      const newContact = await accessChat(user.token, data._id);

      if (!(contacts.filter((e) => e._id === newContact._id).length > 0)) {
        setContacts([...contacts, newContact]);
      }

      setSelectedChat(newContact);
      setSelectedLoadingChat('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
  );
}

export default User;
