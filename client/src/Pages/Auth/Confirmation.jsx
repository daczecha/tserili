import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Confirmation() {
  return (
    <Flex
      color="white"
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg="#2b2b2b"
    >
      <Box textAlign="center">
        <Heading fontSize="70px">Confirmation email sent!</Heading>
        <Text fontSize="30px">
          You will be able to login after confirmation
        </Text>
      </Box>
    </Flex>
  );
}

export default Confirmation;
