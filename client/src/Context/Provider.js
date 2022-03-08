import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userInfo'))
  );
  const [selectedChat, setSelectedChat] = useState('');

  return (
    <Context.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const State = () => {
  return useContext(Context);
};

export default Provider;
