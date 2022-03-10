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
import { State } from '../../Context/Provider';

function Header({ username, avatar }) {
  const { setSelectedChat } = State();

  console.log(username);

  return (
    <Flex
      p="10px 20px 10px 20px"
      alignItems="center"
      color="white"
      w="100%"
      bg="#212121"
      flexShrink="0"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      zIndex="1"
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
          width="42px"
          height="42px"
          size={useBreakpointValue({ base: 'sm', sm: 'md' })}
          name={username}
          src={avatar}
        />
        <Flex
          ml={{ base: '8px', sm: '15px' }}
          flexDir="column"
          justifyContent="center"
        >
          <Heading fontSize="sm" font="bold">
            {username}
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
