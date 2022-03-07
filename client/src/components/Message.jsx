import { BsCheck2All } from 'react-icons/bs';
import { Box, Flex, StackItem, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import React from 'react';

function Message({ received }) {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptate earum aliquam modi odit eius autem tenetur fugit minima
          dolores? Consectetur sed fugiat, iste enim a labore voluptatem
          veritatis distinctio!
          <Flex
            alignItems="center"
            justifyContent="space-between"
            float="right"
          >
            <Text mr="3px" userSelect="none" color="#ddd" fontSize="sm">
              19:00
            </Text>
            {!received && <Icon color="#ddd" fontSize="lg" as={BsCheck2All} />}
          </Flex>
        </Text>
      </Box>
    </StackItem>
  );
}

export default Message;
