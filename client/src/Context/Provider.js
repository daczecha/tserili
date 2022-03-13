import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userInfo'))
  );

  const [search, setSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  const [contacts, setContacts] = useState([]);
  const [onlineContacts, setOnlineContacts] = useState([]);

  const [messages, setMessages] = useState([]);

  const [selectedChat, setSelectedChat] = useState('');
  const [selectedLoadingChat, setSelectedLoadingChat] = useState('');

  const [newMessages, setNewMessages] = useState([]);

  const [socket, setSocket] = useState(null);

  return (
    <Context.Provider
      value={{
        user,
        setUser,

        selectedChat,
        setSelectedChat,

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

        socket,
        setSocket,

        onlineContacts,
        setOnlineContacts,
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
