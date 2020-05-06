import React, { useState } from 'react';
import { Box, Button, Heading, Input, FormControl, FormLabel, Text, FormHelperText, ListItem, List } from '@chakra-ui/core';
import { getCostOfTrips } from './use-cases/getCostOfTrips';
import { getCrossings } from './use-cases/getCrossings';

function App() {
  const [ bags, setBags ] = useState(0);
  const [ geese, setGeese ] = useState(0);

  const [ result, setResult ] = useState({
    crossings: [],
    cost: 0,
  });

  const calculate = (bags, geese) => {
    const crossings = getCrossings(bags, geese);
    const cost = getCostOfTrips(crossings.length);
    setResult({ crossings, cost });
  };

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
        <FormLabel htmlFor="geese">No. Geese</FormLabel>
        <Input type="number" name="geese" aria-describedby="geese-helper"
          data-testid="geese-input"
          value={geese} onChange={({ target: { value } }) => setGeese(value)} />
        <FormHelperText id="geese-helper">
          Enter the number of geese you have to transport
        </FormHelperText>
      </FormControl>
      
      <Button
        mt={8} 
        data-testid="calculate-button"
        onClick={() => calculate(bags, geese)}>
          Calculate
      </Button>

      {
        (result.crossings.length > 0)
          ? (
              <Box>
                <Box mt={8}>
                  <Heading as="h3" size="sm">Cost of trips</Heading>
                  <Text data-testid="cost">£{result.cost}</Text>
                </Box>

                <Box mt={8}>
                  <Heading as="h3" size="sm">Crossings</Heading>
                    <List>
                    {
                      result.crossings.map((crossing, i) => {
                        if (crossing === '') {
                          return <ListItem key={i} color="grey">nothing</ListItem>
                        }
                        return <ListItem key={i}>{crossing}</ListItem>;
                      })
                    }
                    </List>
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
