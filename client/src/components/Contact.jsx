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
import { State } from '../Context/Provider';

const notificationBadgeCSS = {
  position: 'relative',
  borderRadius: '50%',
  background: '#8774E1',
  width: '25px',
  height: '25px',
};

const notificationNumberCSS = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -45%)',
  fontSize: '14px',
  fontWeight: 600,
};

function Contact(props) {
  const { setSelectedChat } = State();

  return (
    <StackItem
      onClick={() => setSelectedChat('selected')}
      _hover={{
        cursor: 'pointer',
        background: props.hoverColor,
      }}
      h="80px"
      bg={props.bgColor}
      color="white"
      borderRadius="14px"
    >
      <HStack display="flex" alignItems="center" w="100%" h="100%" p="10px">
        <Avatar size="md" name="მარიამ კერესელიძე" src="">
          <AvatarBadge
            borderColor={props.bgColor}
            boxSize="0.9em"
            bg="green.500"
          />
        </Avatar>
        <Box p="2px" w="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="md" font="bold">
              მარიამი
            </Heading>
            <Text fontSize="sm" color="gray">
              12:00 PM
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="md" color="gray">
              <span style={{ color: 'white' }}></span>
              Yay thanks:3
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
