import { Center, Spinner, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { State } from '../../Context/Provider';

function Confirmed() {
  const navigate = useNavigate();
  const toast = useToast();

  const { user } = State();

  useEffect(() => {
    if (user) return navigate('/');

    if (!toast.isActive('toast')) {
      toast({
        id: 'toast',
        title: 'User already confirmed',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
    navigate('/login');
    //eslint-disable-next-line
  }, []);

  return (
    <Center bg="#8774E1" width="100%" height="100%">
      <Spinner size="xl" color="white" />
    </Center>
  );
}

export default Confirmed;
