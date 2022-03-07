import { SearchIcon, ArrowBackIcon, Icon } from '@chakra-ui/icons';
import {
  Flex,
  Text,
  Avatar,
  Heading,
  Box,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';

import { FaEllipsisV } from 'react-icons/fa';
import { ChatState } from '../Context/ChatProvider';

function Header() {
  const { setSelectedChat } = ChatState();
  return (
    <Flex
      pr="20px"
      pl="20px"
      alignItems="center"
      color="white"
      h="70px"
      w="100%"
      bg="#212121"
      flexShrink="0"
    >
      <IconButton
        onClick={() => setSelectedChat('')}
        d={{ base: 'auto', md: 'none' }}
        _hover={{
          background: '#333',
        }}
        _focus={{}}
        mr="5px"
        borderRadius="50%"
        bg="transparent"
        icon={<ArrowBackIcon color="#ccc" fontSize="20px" />}
      />
      <Flex flex="1" cursor="pointer" alignItems="center">
        <Avatar
          width={{ base: '42px', sm: '48px' }}
          height={{ base: '42px', sm: '48px' }}
          size={useBreakpointValue({ base: 'sm', sm: 'md' })}
          name="მარიამ კერესელიძე"
          src=""
        />
        <Flex
          ml={{ base: '8px', sm: '15px' }}
          flexDir="column"
          justifyContent="center"
        >
          <Heading fontSize="sm" font="bold">
            მარიამი
          </Heading>
          <Text fontSize="sm" color="#8774E1">
            online
          </Text>
        </Flex>
      </Flex>

      <Box>
        <IconButton
          _hover={{
            background: '#333',
          }}
          _focus={{}}
          mr="5px"
          borderRadius="50%"
          bg="transparent"
          icon={<SearchIcon color="#ccc" fontSize="18px" />}
        />

        <IconButton
          _hover={{
            background: '#333',
          }}
          _focus={{}}
          mr="5px"
          borderRadius="50%"
          bg="transparent"
          icon={<Icon as={FaEllipsisV} color="#ccc" fontSize="18px" />}
        />
      </Box>
    </Flex>
  );
}

export default Header;
