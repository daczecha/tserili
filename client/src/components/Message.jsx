import { Box, Flex, StackItem, Text } from '@chakra-ui/react';
import React from 'react';

function Message({ received, lastMessage }) {
  const bgColor = received ? '#212121' : '#816FD4';
  let cornerStyle = {
    content: '',
    width: '0px',
    height: '0px',
    position: 'absolute',
    borderBottom: `15px solid ${bgColor}`,
    borderTop: '15px solid transparent',
    bottom: '0px',
    zIndex: '-1',
  };
  cornerStyle = received
    ? {
        ...cornerStyle,
        borderRight: `15px solid ${bgColor}`,
        borderLeft: '15px solid transparent',
        left: '-10px',
      }
    : {
        ...cornerStyle,
        borderLeft: `15px solid ${bgColor}`,
        borderRight: '15px solid transparent',
        right: '-10px',
      };

  return (
    <StackItem
      width="100%"
      d="flex"
      justifyContent={received ? 'flex-start' : 'flex-end'}
    >
      <Box
        position="relative"
        bg={bgColor}
        p="10px 10px 5px 10px"
        color="white"
        borderRadius="xl"
        maxW="75%"
        zIndex="1"
      >
        {lastMessage && <div style={cornerStyle} />}
        <Text fontSize="md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem in
          ducimus minima quae, ipsam dicta voluptates architecto. Distinctio at
          nihil explicabo ipsa dicta suscipit mollitia? Sit consequatur
          aspernatur explicabo? Odio.
        </Text>
        <Flex justifyContent="flex-end">
          <Text color="#ccc" fontSize="xs">
            19:00 PM
          </Text>
        </Flex>
      </Box>
    </StackItem>
  );
}

export default Message;
