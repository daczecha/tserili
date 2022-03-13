import axios from 'axios';
const baseURL = 'http://localhost:8800/api/message';

const getMessages = async (token, chatId, cancelTokenSource) => {
  const { data } = await axios.get(`${baseURL}/${chatId}`, {
    headers: { Authorization: `Bearer ${token}` },
    cancelToken: cancelTokenSource.token,
  });
  return data;
};

const sendMessage = async (token, content, chatId) => {
  const { data } = await axios.post(
    baseURL,
    { content, conversation: chatId },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

export { getMessages, sendMessage };
