import { VStack, Text } from '@chakra-ui/react';
import { State } from '../../Context/Provider';

import User from './User';

function SearchResults() {
  const { query, searchResults } = State();

  const renderResults = searchResults.map((c) => (
    <User key={c._id} bgColor="#212121" hoverColor="#2b2b2b" data={c} />
  ));

  return (
    <VStack
      pr="5px"
      pl="5px"
      w="100%"
      spacing="0"
      overflowY="auto"
      align="stretch"
    >
      {searchResults.length > 0 ? (
        renderResults
      ) : query ? (
        <Text color="white">No users found</Text>
      ) : (
        <Text color="white">Search for users</Text>
      )}
    </VStack>
  );
}

export default SearchResults;
