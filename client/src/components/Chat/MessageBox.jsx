import { Spinner, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { State } from '../../Context/Provider';
import { getMessages } from '../../services/messageServices';

import Message from './Message';

function MessageBox({ chatId }) {
  const { messages, setMessages, user } = State();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchMessages = async () => {
      const data = await getMessages(user.token, chatId);
      setMessages(data);
      setLoading(false);
    };

    fetchMessages();
    //eslint-disable-next-line
  }, [chatId]);

  console.log(messages);

  const renderMessages = messages.map((m) => {
    const received = m.sender._id !== user._id;
    return <Message key={m._id} content={m.content} received={received} />;
  });

  return (
    <VStack
      spacing="5px"
      p="5px 20px 20px 20px"
      width="100%"
      height="100%"
      overflowY="auto"
      justify={loading ? 'center' : ''}
      align={loading ? 'center' : ''}
    >
      {loading ? <Spinner color="gray" size="xl" /> : renderMessages}
    </VStack>
  );
}

export default MessageBox;
