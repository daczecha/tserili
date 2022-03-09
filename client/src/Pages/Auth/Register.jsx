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
  Progress,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { InfoOutlineIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';

import { registerUser } from '../../services/authServices';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [passwordStrength, setPasswordStrength] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    confirmation: '',
  });

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const toast = useToast();

  const passwordHandler = (e) => {
    let strongPassword = new RegExp(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
    );
    let mediumPassword = new RegExp(
      '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'
    );

    setPassword(e.target.value);
    setErrors({
      ...errors,
      password: '',
    });

    if (e.target.value) {
      if (strongPassword.test(e.target.value)) {
        setPasswordStrength('Strong');
      } else if (mediumPassword.test(e.target.value)) {
        setPasswordStrength('Medium');
      } else {
        setPasswordStrength('Weak');
      }
    } else {
      setPasswordStrength('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordStrength === 'Weak') {
      setErrors({ ...errors, password: 'Password is too weak' });
      return;
    }

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

      await registerUser(body);

      setPassword('');
      setUsername('');
      setEmail('');

      setLoading(false);

      toast({
        title: 'Register successfull.',
        description: 'Confirmation email sent',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
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
                onChange={(e) => {
                  setUsername(e.target.value);
                  setErrors({
                    ...errors,
                    username: '',
                  });
                }}
                required
              />
              <Text my="5px" color="#e86161">
                {errors.username}
              </Text>
            </FormControl>
            <FormControl>
              <FormLabel
                d="flex"
                justifyContent="space-between"
                m="0"
                htmlFor="email"
              >
                <Heading color="#aaa" fontSize={'md'}>
                  Password
                </Heading>
                <Tooltip
                  label="The password must be at least 6 characters long,
                                have at least one uppercase letter [A-Z], lowercase letter [a-z], digit [0-9] and special character [!@?]."
                >
                  <InfoOutlineIcon
                    color="#8774E1"
                    cursor="pointer"
                    fontSize="md"
                  />
                </Tooltip>
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
                  onChange={passwordHandler}
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
              <Progress
                d={passwordStrength ? 'inherit' : 'none'}
                w="98%"
                mx="auto"
                mt="5px"
                value={
                  passwordStrength === 'Strong'
                    ? 100
                    : passwordStrength === 'Medium'
                    ? 50
                    : passwordStrength === 'Weak'
                    ? 20
                    : 0
                }
                borderRadius="lg"
                size="xs"
                colorScheme={
                  passwordStrength === 'Strong'
                    ? 'green'
                    : passwordStrength === 'Medium'
                    ? 'orange'
                    : passwordStrength === 'Weak'
                    ? 'red'
                    : '#181818'
                }
                bg="#181818"
              />

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
