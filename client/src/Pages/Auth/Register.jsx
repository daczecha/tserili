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
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';

import { registerUser } from '../../services/authServices';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmation: '',
  });

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        username,
        password,
      };

      const data = await registerUser(body);
      if (data) navigate('/confirmation');

      setPassword('');
      setUsername('');
      setEmail('');

      setLoading(true);
    } catch (error) {
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
          <Heading fontSize={'2xl'}>Create an account</Heading>
        </Box>

        <form onSubmit={handleSubmit}>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
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
                        <ViewOffIcon fontSize="lg" />
                      ) : (
                        <ViewIcon fontSize="lg" />
                      )
                    }
                  />
                </InputRightElement>
              </InputGroup>
              <Text m="5px" color="#e86161">
                {errors.password}
              </Text>
            </FormControl>
            <Button
              type="submit"
              _hover={{
                background: ' #6655b5',
              }}
              width={'100%'}
              bg="#8774E1"
              isLoading={loading}
            >
              Continue
            </Button>
          </Stack>
        </form>
        <Stack spacing={2}>
          <Text fontSize="sm" color="#777">
            <Link href="/login" color="#8774E1">
              Already have an account?
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Register;
