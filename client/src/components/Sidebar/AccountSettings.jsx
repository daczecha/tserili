import { ArrowBackIcon } from '@chakra-ui/icons';
import { FaEllipsisV } from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';
import { HiOutlineLogout, HiOutlineMail } from 'react-icons/hi';
import {
  AspectRatio,
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from '@chakra-ui/react';
import { State } from '../../Context/Provider';

function AccountSettings({ isOpen, onClose }) {
  const { user } = State();

  const toast = useToast();

  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#212121">
          <DrawerHeader p="0" m="0">
            <Flex p="5px " align="center" justify="space-between">
              <Flex align="center">
                <IconButton
                  color="white"
                  onClick={onClose}
                  _hover={{
                    background: '#333',
                  }}
                  _focus={{}}
                  mr="2px"
                  borderRadius="50%"
                  bg="transparent"
                  icon={<ArrowBackIcon color="#ccc" fontSize="20px" />}
                />
                <Heading fontSize="18px" color="white">
                  Settings
                </Heading>
              </Flex>

              <Flex>
                <IconButton
                  color="white"
                  _hover={{
                    background: '#333',
                  }}
                  _focus={{}}
                  mr="2px"
                  borderRadius="50%"
                  bg="transparent"
                  icon={<Icon color="#ccc" fontSize="25px" as={BiPencil} />}
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
                    icon={
                      <Icon as={FaEllipsisV} color="#ccc" fontSize="18px" />
                    }
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
                      fontSize="md"
                      icon={<Icon fontSize="20px" as={HiOutlineLogout} />}
                      onClick={() => {
                        localStorage.removeItem('userInfo');
                        window.location.href = '/';
                      }}
                    >
                      Log Out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
            <AspectRatio maxW="320px" ratio={4 / 3} m="0">
              <Avatar
                size="2xl"
                w="100%"
                h="100%"
                borderRadius={0}
                name={user.username}
                src={user.avatar}
              />
            </AspectRatio>
            <Flex transform="translateY(-50%)" flexDirection={'column'}>
              <Box h="50px" p="10px 15px" m="20px 0" w="100%">
                <Text
                  fontSize="lg"
                  color="white"
                  textShadow=" rgba(0, 0, 0, 0.2) 0px 1px 4px"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  maxW="calc(100%)"
                >
                  {user.username}
                </Text>
                <Text
                  fontSize="sm"
                  color="#493c89"
                  textShadow=" rgba(0, 0, 0, 0.2) 0px 1px 4px"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  online
                </Text>
              </Box>
              <Flex
                onClick={() => {
                  navigator.clipboard.writeText(user.email);
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
                        Email copied to clipboard
                      </Box>
                    ),
                    duration: 1000,
                  });
                }}
                _hover={{
                  cursor: 'pointer',
                  background: '#333',
                }}
                h="70px"
                p="10px 15px"
                m="10px 5px"
                borderRadius="xl"
              >
                <HStack>
                  <HStack spacing={6}>
                    <Icon
                      alignSelf="flex-start"
                      fontSize="27px"
                      color="#aaa"
                      as={HiOutlineMail}
                    />
                    <Box alignSelf="flex-start">
                      <Text
                        color="#ccc"
                        fontSize="sm"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        w="240px"
                      >
                        {user.email}
                      </Text>
                      <Text color="#aaa" fontSize="xs">
                        EMAIL
                      </Text>
                    </Box>
                  </HStack>
                </HStack>
              </Flex>
            </Flex>
          </DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AccountSettings;
