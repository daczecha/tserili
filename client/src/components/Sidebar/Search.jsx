import { useEffect } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { State } from '../../Context/Provider';
import { getUsers } from '../../services/userServices';

function Search() {
  const { user, query, setQuery, setSearch, setSearchResults } = State();

  useEffect(() => {
    setSearchResults([]);
    const fetchUsers = async () => {
      const data = await getUsers(user.token, query);
      setSearchResults(data);
    };
    if (query.trim()) fetchUsers();
    else {
      setSearchResults([]);
      setSearch(false);
    }
    //eslint-disable-next-line
  }, [query]);

  return (
    <InputGroup minW="230px">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        bg="#181818"
        borderColor="#2f2f2f"
        borderRadius="40px"
        focusBorderColor="#8774E1"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSearch(true);
        }}
      />
    </InputGroup>
  );
}

export default Search;
