import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Flex
      color="white"
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg="#8774e1"
    >
      <Stack
        m="10px"
        spacing={6}
        borderRadius="20px"
        w="450px"
        bg="#2B2B2B"
        p="20px"
      >
        <Box textAlign={'center'}>
          <Heading fontSize={'2xl'}>Create an account</Heading>
        </Box>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel m="0" htmlFor="email">
              <Heading color="#aaa" fontSize={'md'}>
                Email
              </Heading>
            </FormLabel>
            <Input
              bg="#181818"
              borderColor="#2f2f2f"
              borderRadius="10px"
              focusBorderColor="#8774E1"
              id="email"
              type="email"
            />
          </FormControl>

          <FormControl>
            <FormLabel m="0" htmlFor="email">
              <Heading color="#aaa" fontSize={'md'}>
                Username
              </Heading>
            </FormLabel>
            <Input
              bg="#181818"
              borderColor="#2f2f2f"
              borderRadius="10px"
              focusBorderColor="#8774E1"
              id="username"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel m="0" htmlFor="email">
              <Heading color="#aaa" fontSize={'md'}>
                Password
              </Heading>
            </FormLabel>
            <InputGroup>
              <Input
                bg="#181818"
                borderColor="#2f2f2f"
                borderRadius="10px"
                focusBorderColor="#8774E1"
                id="password"
                type={showPassword ? 'text' : 'password'}
              />
              <InputRightElement>
                <IconButton
                  _hover={{}}
                  _focus={{}}
                  _active={{
                    bacground: 'transparent',
                    transform: 'scale(1.1)',
                  }}
                  bg="transparent"
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  icon={
                    showPassword ? (
                      <ViewOffIcon fontSize="lg" />
                    ) : (
                      <ViewIcon fontSize="lg" />
                    )
                  }
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Stack>
        <Stack spacing={2}>
          <Button
            _hover={{
              background: ' #6655b5',
            }}
            width={'100%'}
            bg="#8774E1"
          >
            Continue
          </Button>
          <Text fontSize="sm" color="#777">
            <Link href="/login" color="#8774E1">
              Already have an account?{' '}
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Register;
