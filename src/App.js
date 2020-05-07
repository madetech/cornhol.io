import React, { useState } from 'react';
import { Box, Button, Heading, Input, FormControl, FormLabel, Text, FormHelperText } from '@chakra-ui/core';
import { getCostOfTrips } from './use-cases/getCostOfTrips';
import { getCrossingsPossible } from './use-cases/getCrossings';
import CrossingsList from './CrossingsList';

const calculate = (bags, geese, foxes) => {
  const { possible, crossings } = getCrossingsPossible(
    parseInt(bags), 
    parseInt(geese),
    parseInt(foxes),
  );
  
  const cost = getCostOfTrips(crossings.length);
  return { possible, crossings, cost };
};

function App() {
  const [ bags, setBags ] = useState(0);
  const [ geese, setGeese ] = useState(0);
  const [ foxes, setFoxes ] = useState(0);
  const [ result, setResult ] = useState(calculate(bags, geese));
  
  return (
    <Box maxW={{ base: '100%', md: '40vw' }} margin="0 auto">
      <Heading as="h1" fontSize="4rem" textAlign="center">
        <span role="img" aria-label="Corn">🌽</span>
      </Heading>
      
      <FormControl marginTop={8}>
        <FormLabel htmlFor="bags">No. bags</FormLabel>
        <Input type="number" name="bags" aria-describedby="bags-helper"
          data-testid="corn-input"
          value={bags} onChange={({ target: { value } }) => setBags(value)} />
        <FormHelperText id="bags-helper">
          Enter the number of bags you have to transport
        </FormHelperText>
      </FormControl>

      <FormControl marginTop={8}>
        <FormLabel htmlFor="geese">No. geese</FormLabel>
        <Input type="number" name="geese" aria-describedby="geese-helper"
          data-testid="geese-input"
          value={geese} onChange={({ target: { value } }) => setGeese(value)} />
        <FormHelperText id="geese-helper">
          Enter the number of geese you have to transport
        </FormHelperText>
      </FormControl>

      <FormControl marginTop={8}>
        <FormLabel htmlFor="geese">No. foxes</FormLabel>
        <Input type="number" name="foxes" aria-describedby="foxes-helper"
          data-testid="foxes-input"
          value={foxes} onChange={({ target: { value } }) => setFoxes(value)} />
        <FormHelperText id="foxes-helper">
          Enter the number of foxes you have to transport
        </FormHelperText>
      </FormControl>
      
      <Button
        mt={8} 
        data-testid="calculate-button"
        onClick={() => setResult(calculate(bags, geese, foxes))}>
          Calculate
      </Button>

      {
        (result.possible)
          ? (
              <Box>
                <Box mt={8}>
                  <Heading as="h3" size="sm">Cost of trips</Heading>
                  <Text data-testid="cost">£{result.cost.toFixed(2)}</Text>
                </Box>

                <Box mt={8}>
                  <Heading as="h3" size="sm">Crossings</Heading>
                  <CrossingsList crossings={result.crossings} />
                </Box>
              </Box>
            )
          : (
              <Box mt={8}>
                <Heading as="h3" size="sm">This journey is not possible.</Heading>
              </Box>
            )
      }
    </Box>
  );
}

export default App;
