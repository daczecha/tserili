import { BsCheck2All } from 'react-icons/bs';
import { Box, StackItem, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import React from 'react';

function Message({ received, content }) {
  const bgColor = received ? '#212121' : '#816FD4';

  return (
    <StackItem
      width="100%"
      d="flex"
      justifyContent={received ? 'flex-start' : 'flex-end'}
    >
      <Box
        bg={bgColor}
        p="5px 10px 5px 10px"
        color="white"
        borderRadius="xl"
        maxW="75%"
      >
        <Text fontSize="md" pos="relative">
          {content}
          <span
            style={{
              display: 'flex',
              float: 'right',
            }}
          >
            <span
              style={{
                color: '#ddd',
                fontSize: '15px',
                marginRight: '3px',
                userSelect: 'none',
              }}
            >
              19:00
            </span>
            {!received && <Icon color="#ddd" fontSize="lg" as={BsCheck2All} />}
          </span>
        </Text>
      </Box>
    </StackItem>
  );
}

export default Message;
