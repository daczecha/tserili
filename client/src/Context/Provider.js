import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userInfo'))
  );
  const [selectedChat, setSelectedChat] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState('');

  return (
    <Context.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        searchResults,
        setSearchResults,
        query,
        setQuery,
        contacts,
        setContacts,
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
