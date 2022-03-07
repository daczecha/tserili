import { Flex, Icon, IconButton } from '@chakra-ui/react';

import { ImAttachment } from 'react-icons/im';
import { FaRegSmile } from 'react-icons/fa';
import { BiMicrophone } from 'react-icons/bi';

import './MessageForm.css';

function MessageForm() {
  const resizeTextarea = (e) => {
    e.target.style.height = '50px';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <Flex
      p="0px 20px 0px 20px"
      alignItems="flex-end"
      color="white"
      w="100%"
      bg="#212121"
      flexShrink="0"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      zIndex="1"
    >
      <IconButton
        _hover={{
          background: '#333',
        }}
        _focus={{}}
        m="10px"
        mr="2px"
        borderRadius="50%"
        bg="transparent"
        icon={<Icon as={ImAttachment} color="#ccc" fontSize="2xl" />}
      />

      <textarea
        style={{
          fontSize: '18px',
          outline: 'none',
          background: 'transparent',
          padding: '10px',
          width: '100%',
          height: '50px',
          resize: 'none',
          maxHeight: '150px',
        }}
        onKeyUp={resizeTextarea}
        spellcheck="false"
        placeholder="Message"
        required
      />

      <IconButton
        _hover={{
          background: '#333',
        }}
        _focus={{}}
        m="10px"
        ml="2px"
        borderRadius="50%"
        bg="transparent"
        icon={<Icon as={FaRegSmile} color="#ccc" fontSize="2xl" />}
      />

      <IconButton
        _hover={{
          background: '#333',
        }}
        _focus={{}}
        m="10px"
        borderRadius="50%"
        bg="transparent"
        icon={<Icon as={BiMicrophone} color="#ccc" fontSize="28px" />}
      />
    </Flex>
  );
}

export default MessageForm;
