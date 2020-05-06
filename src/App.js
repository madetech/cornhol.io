import React, { useState } from 'react';
import { Box, Heading, Input, FormControl, FormLabel, Text, FormHelperText } from '@chakra-ui/core';
import { getCostOfTrips } from './use-cases/getCostOfTrips';

function App() {
  const [ cost, setCost ] = useState(0);

  return (
    <Box maxW={{ base: '100%', md: '40vw' }} margin="0 auto">
      <Heading as="h1" fontSize="4rem" textAlign="center">
        <span role="img" aria-label="Corn">🌽</span>
      </Heading>
      
      <FormControl marginTop={8}>
        <FormLabel htmlFor="bags">No. bags</FormLabel>
        <Input type="number" name="bags" aria-describedby="bags-helper"/>
        <FormHelperText id="bags-helper">
          Enter the number of bags you have to transport
        </FormHelperText>
      </FormControl>

      <FormControl marginTop={8}>
        <FormLabel htmlFor="geese">No. Geese</FormLabel>
        <Input type="number" name="geese" aria-describedby="geese-helper"/>
        <FormHelperText id="geese-helper">
          Enter the number of geese you have to transport
        </FormHelperText>
      </FormControl>

      <Box marginTop={8}>
        <Heading as="h3" size="sm">Cost of trips</Heading>
        <Text>£{cost.toFixed(2)}</Text>
      </Box>

      <Box marginTop={8}>
        <Heading as="h3" size="sm">Crossings</Heading>
        <Text></Text>
      </Box>

    </Box>
  );
}

export default App;
