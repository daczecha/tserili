import { Flex, VStack, Text } from '@chakra-ui/react';
import { State } from '../Context/Provider';

import User from './User';

function SearchResults() {
  const { contacts, searchResults } = State();

  console.log(contacts);
  console.log(searchResults);

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
      {renderResults ? renderResults : <Text>No Users found</Text>}
    </VStack>
  );
}

export default SearchResults;
