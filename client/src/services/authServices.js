import axios from 'axios';
const baseURL = 'http://localhost:8800/api/auth';

const registerUser = async (body) => {
  const { data } = await axios.post(`${baseURL}/register`, body);
  return data;
};

const loginUser = async (body) => {
  const { data } = await axios.post(`${baseURL}/login`, body);
  return data;
};

export { registerUser, loginUser };
