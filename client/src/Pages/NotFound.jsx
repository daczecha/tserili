import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function NotFound() {
  return (
    <Flex
      color="white"
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg="#2b2b2b"
    >
      <Box textAlign="center">
        <Heading fontSize="160px">404</Heading>
        <Text fontSize="30px">NOT FOUND ☹️</Text>
      </Box>
    </Flex>
  );
}

export default NotFound;
