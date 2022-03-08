import axios from 'axios';
const baseURL = 'http://localhost:8800';

const registerUser = async (body) => {
  const { data } = await axios.post(`${baseURL}/auth/register`, body);
  return data;
};

const loginUser = async (body) => {
  const { data } = await axios.post(`${baseURL}/auth/login`, body);
  return data;
};

export { registerUser, loginUser };
