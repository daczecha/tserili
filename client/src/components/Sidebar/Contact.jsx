import {
  Avatar,
  Text,
  AvatarBadge,
  Box,
  StackItem,
  HStack,
  Heading,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { State } from '../../Context/Provider';

function Contact({ selected, data, sent }) {
  const bgColor = selected ? '#7C6BCC' : '#212121';
  const hoverColor = selected ? '#7C6BCC' : '#2b2b2b';

  const notificationBadgeCSS = {
    position: 'relative',
    borderRadius: '50%',
    background: selected ? 'white' : '#7D6CCF',
    width: '25px',
    height: '25px',
  };

  const notificationNumberCSS = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -45%)',
    color: selected ? 'gray' : 'white',
    fontSize: '14px',
    fontWeight: 600,
  };

  const { user, setSelectedChat } = State();

  const { username, avatar } = data.users.find((u) => u._id !== user._id);

  const handleSelect = () => {
    setSelectedChat(data);
  };

  return (
    <StackItem
      onClick={handleSelect}
      _hover={{
        cursor: 'pointer',
        background: hoverColor,
      }}
      h="80px"
      bg={bgColor}
      color="white"
      borderRadius="14px"
    >
      <HStack alignItems="center" w="100%" h="100%" p="10px">
        <Avatar size="md" name={username} src={avatar}>
          <AvatarBadge
            borderColor={bgColor}
            boxSize="0.9em"
            bg={selected ? 'white' : 'green.500'}
          />
        </Avatar>
        <Box p="2px" w="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="md" font="bold">
              {username}
            </Heading>
            <Text fontSize="sm" color={selected ? 'white' : 'gray'}>
              12:00
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="md" color={selected ? 'white' : 'gray'}>
              {data.latestMessage
                ? data.latestMessage.content.length >= 10
                  ? data.latestMessage.content.substring(0, 15) + '...'
                  : data.latestMessage.content
                : ''}
            </Text>
            <span style={notificationBadgeCSS}>
              <span style={notificationNumberCSS}>{1}</span>
            </span>
          </Flex>
        </Box>
      </HStack>
    </StackItem>
  );
}

export default Contact;
