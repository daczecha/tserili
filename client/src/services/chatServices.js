import axios from 'axios';
const baseURL = 'http://localhost:8800/api/conversation';

const accessChat = async (token) => {
  const { data } = await axios.post(baseURL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const getChats = async (token) => {
  const { data } = await axios.get(baseURL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export { accessChat, getChats };