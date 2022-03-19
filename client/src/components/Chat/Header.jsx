import { SearchIcon, ArrowBackIcon, Icon } from '@chakra-ui/icons';
import {
  Flex,
  Text,
  Avatar,
  Heading,
  Box,
  IconButton,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';

import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { FaEllipsisV, FaTrashAlt } from 'react-icons/fa';
import { GiBroom } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';

import { State } from '../../Context/Provider';
import { updateLatestMessage } from '../../helper_functions';
import { clearHistory } from '../../services/messageServices';
import { deleteChat } from '../../services/chatServices';

function Header({ username, avatar }) {
  const {
    user,
    contacts,
    setContacts,
    setMessages,
    setSelectedChat,
    selectedChat,
  } = State();

  const toast = useToast();

  const handleViewProfile = () => {};

  const handleClearHistory = async () => {
    try {
      toast({
        position: 'bottom',
        render: () => (
          <Box
            color="white"
            textAlign="center"
            borderRadius="lg"
            p={3}
            bg="#222"
          >
            Cleared Chat History
          </Box>
        ),
        duration: 1000,
      });
      setMessages([]);
      updateLatestMessage(contacts, selectedChat._id, '');
      await clearHistory(user.token, selectedChat._id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteChat = async () => {
    try {
      toast({
        position: 'bottom',
        render: () => (
          <Box
            color="white"
            textAlign="center"
            borderRadius="lg"
            p={3}
            bg="#222"
          >
            Deleted Chat
          </Box>
        ),
        duration: 1000,
      });
      setContacts(contacts.filter((c) => c._id !== selectedChat._id));
      setSelectedChat('');
      await deleteChat(user.token, selectedChat._id);
    } catch (err) {
      console.log(err);
    }
  };

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

        <Menu>
          <MenuButton
            _hover={{
              background: '#333',
            }}
            _focus={{}}
            _active={{}}
            border="none"
            as={IconButton}
            aria-label="Options"
            variant="outline"
            color="white"
            mr="2px"
            borderRadius="50%"
            bg="transparent"
            icon={<Icon as={FaEllipsisV} color="#ccc" fontSize="18px" />}
          />
          <MenuList
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            border="none"
            bg="#222"
            color="white"
          >
            <MenuItem
              onClick={handleViewProfile}
              _focus={{}}
              _active={{}}
              _hover={{ background: '#333' }}
              fontSize="md"
              icon={<Icon as={BsFillPersonFill} color="#ccc" fontSize="22px" />}
            >
              View Profile
            </MenuItem>

            <MenuItem
              onClick={handleClearHistory}
              _focus={{}}
              _active={{}}
              _hover={{ background: '#333' }}
              fontSize="md"
              icon={<Icon as={GiBroom} color="#ccc" fontSize="22px" />}
            >
              Clear History
            </MenuItem>

            <MenuItem
              onClick={handleDeleteChat}
              _focus={{}}
              _active={{}}
              _hover={{ background: '#333' }}
              fontSize="md"
              icon={<Icon as={FaTrashAlt} color="#ccc" fontSize="18px" />}
            >
              Delete Chat
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Header;
