import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
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
  InputGroup,
  IconButton,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { State } from '../../Context/Provider';
import { loginUser } from '../../services/authServices';

import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmation: '',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = State();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setErrors({
      email: '',
      password: '',
      confirmation: '',
    });

    try {
      const body = {
        email,
        password,
      };

      const data = await loginUser(body);

      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);

      setPassword('');
      setEmail('');
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <Text align="center" color="#ffb019">
            {errors.confirmation}
          </Text>
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
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({
                    ...errors,
                    email: '',
                  });
                }}
                required
              />
              <Text my="5px" color="#e86161">
                {errors.email}
              </Text>
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({
                      ...errors,
                      password: '',
                    });
                  }}
                  required
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
                        <ViewIcon fontSize="lg" />
                      ) : (
                        <ViewOffIcon fontSize="lg" />
                      )
                    }
                  />
                </InputRightElement>
              </InputGroup>
              <Text my="5px" color="#e86161">
                {errors.password}
              </Text>
            </FormControl>
            <Link fontSize="sm" href="/register" color="#8774E1">
              Forgot your password?
            </Link>
            <Button
              _hover={{
                background: ' #6655b5',
              }}
              type="submit"
              width={'100%'}
              bg="#8774E1"
              isLoading={loading}
            >
              Login
            </Button>
          </Stack>
        </form>
        <Stack spacing={2}>
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
