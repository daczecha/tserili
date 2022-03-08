import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';

function Login() {
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
          <Heading fontSize={'2xl'}>Welcome back!</Heading>
          <Text color="#aaa">Sign in to your account</Text>
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
                Password
              </Heading>
            </FormLabel>
            <Input
              bg="#181818"
              borderColor="#2f2f2f"
              borderRadius="10px"
              focusBorderColor="#8774E1"
              id="password"
              type="password"
            />
          </FormControl>
          <Link fontSize="sm" href="/register" color="#8774E1">
            Forgot your password?
          </Link>
        </Stack>
        <Stack spacing={2}>
          <Button
            _hover={{
              background: ' #6655b5',
            }}
            width={'100%'}
            bg="#8774E1"
          >
            Login
          </Button>
          <Text fontSize="sm" color="#777">
            Need an account?{' '}
            <Link href="/register" color="#8774E1">
              Register
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Login;
