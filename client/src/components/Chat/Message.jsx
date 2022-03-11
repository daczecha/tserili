import { AiOutlineClockCircle, AiOutlineCheck } from 'react-icons/ai';
import { Box, StackItem, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import React from 'react';

function Message({ sentSuccessfull, received, content }) {
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
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '10px',
            }}
          >
            <span
              style={{
                color: '#ddd',
                fontSize: '12px',
                fontFamily: 'sans-serif',
                marginRight: '3px',
                userSelect: 'none',
              }}
            >
              19:00
            </span>
            {!received && (
              <Icon
                color="#ddd"
                fontSize="sm"
                as={sentSuccessfull ? AiOutlineCheck : AiOutlineClockCircle}
              />
            )}
          </span>
        </Text>
      </Box>
    </StackItem>
  );
}

export default Message;
