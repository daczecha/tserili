import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function Search() {
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
      />
    </InputGroup>
  );
}

export default Search;
