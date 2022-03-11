import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userInfo'))
  );

  const [search, setSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  const [contacts, setContacts] = useState([]);

  const [messages, setMessages] = useState([]);

  const [selectedChat, setSelectedChat] = useState('');
  const [selectedLoadingChat, setSelectedLoadingChat] = useState('');

  const [newMessages, setNewMessages] = useState([]);

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
        selectedLoadingChat,
        setSelectedLoadingChat,
        search,
        setSearch,
        messages,
        setMessages,

        newMessages,
        setNewMessages,
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
