import axios from 'axios';
const baseURL = 'http://localhost:8800/api/user';

const getUsers = async (token, query) => {
  const { data } = await axios.get(`${baseURL}?search=${query}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export { getUsers };
