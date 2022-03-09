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

function User({ hoverColor, bgColor, data }) {
  const { username, avatar } = data;

  return (
    <StackItem
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
              <span style={{ color: 'white' }}></span>
              Test
            </Text>
          </Flex>
        </Box>
      </HStack>
    </StackItem>
  );
}

export default User;
