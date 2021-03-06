import { Center, Spinner, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (!toast.isActive('toast')) {
      toast({
        id: 'toast',
        title: 'Confirmation successfull',
        status: 'success',
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

export default Confirmation;
