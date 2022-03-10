import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react';

import { HamburgerIcon, Icon } from '@chakra-ui/icons';
import { FaPen } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';

import ContactList from './ContactList';
import Search from './Search';

import { State } from '../../Context/Provider';
import SearchResults from './SearchResults';

function Sidebar() {
  const { selectedChat, search, setSearch } = State();

  return (
    <VStack
      position="relative"
      d={{ base: selectedChat ? 'none' : 'flex', md: 'flex' }}
      overflow="hidden"
      minW="320px"
      h="100%"
      flex="3"
      w="300px"
      bg="#212121"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      zIndex="1"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        color="white"
        p="7px"
      >
        <IconButton
          _hover={{
            background: '#333',
          }}
          _focus={{}}
          mr="10px"
          borderRadius="50%"
          bg="transparent"
          icon={<HamburgerIcon fontSize="23px" />}
        />
        <Search />
      </Flex>
      {search ? <SearchResults /> : <ContactList />}
      <Menu>
        <MenuButton
          _hover={{}}
          _focus={{}}
          _active={{}}
          pos="absolute"
          right="30px"
          bottom="30px"
          w="60px"
          h="60px"
          bg="#8774E1"
          color="white"
          borderRadius="50%"
          border="none"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          as={IconButton}
          aria-label="Options"
          icon={<Icon as={FaPen} />}
          variant="outline"
        />
        <MenuList
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          border="none"
          bg="#222"
          color="white"
        >
          <MenuItem
            _focus={{}}
            _active={{}}
            _hover={{ background: '#333' }}
            icon={<Icon fontSize="20px" as={BiUser} />}
            onClick={() => setSearch(true)}
          >
            New Private Chat
          </MenuItem>
          <MenuItem
            _focus={{}}
            _active={{}}
            _hover={{ background: '#333' }}
            icon={<Icon fontSize="20px" as={BiGroup} />}
          >
            New Group
          </MenuItem>
        </MenuList>
      </Menu>
    </VStack>
  );
}

export default Sidebar;
