import { VStack } from '@chakra-ui/react';
import Message from './Message';

function MessageBox() {
  return (
    <VStack spacing="5px" p="5px 20px 20px 20px" width="100%" overflowY="auto">
      <Message received={true} />
      <Message received={true} />
      <Message received={true} />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message received={true} />
      <Message received={true} />
      <Message received={true} />
      <Message />
      <Message />
      <Message />
      <Message received={true} />
      <Message />
      <Message received={true} />
      <Message />
      <Message lastMessage={true} />
    </VStack>
  );
}

export default MessageBox;
