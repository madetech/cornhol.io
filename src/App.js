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

const EmojiList = ({ count, emoji }) => {
  let string = '';

  for(let i = 0; i < count; i++) {
    string += `${emoji} `;
  }

  return <Text mt={2} mb={2}>{string}</Text>;
}

function App() {
  const [ bags, setBags ] = useState(0);
  const [ geese, setGeese ] = useState(0);
  const [ foxes, setFoxes ] = useState(0);
  const [ result, setResult ] = useState(calculate(bags, geese));
  const [ step, setStep ] = useState(0);

  return (
    <Box maxW={{ base: '100%', md: '40vw' }} margin="0 auto">
      <Heading as="h1" fontSize="4rem" textAlign="center">
        <span role="img" aria-label="Corn">🌽</span>
      </Heading>
      
      <FormControl marginTop={8}>
        <FormLabel htmlFor="bags">No. bags</FormLabel>
        <EmojiList count={bags} emoji="🌽" />
        <Input 
          type="number" 
          name="bags" 
          aria-describedby="bags-helper"
          data-testid="corn-input" 
          min={0}
          max={64}
          value={bags} 
          onClick={({ target }) => target.select()}
          onChange={({ target: { value } }) => setBags(Math.min(value, 64))} />
        <FormHelperText id="bags-helper">
          Enter the number of bags you have to transport
        </FormHelperText>
      </FormControl>

      <FormControl marginTop={8}>
        <FormLabel htmlFor="geese">No. geese</FormLabel>
        <EmojiList count={geese} emoji="🦢" />
        <Input type="number" name="geese" aria-describedby="geese-helper"
          data-testid="geese-input" min={0} max={64}
          onClick={({ target }) => target.select()}
          value={geese} onChange={({ target: { value } }) => setGeese(Math.min(value, 64))} />
        <FormHelperText id="geese-helper">
          Enter the number of geese you have to transport
        </FormHelperText>
      </FormControl>

      <FormControl marginTop={8}>
        <FormLabel htmlFor="geese">No. foxes</FormLabel>
        <EmojiList count={foxes} emoji="🦊" />
        <Input type="number" name="foxes" aria-describedby="foxes-helper"
          data-testid="foxes-input" min={0} max={64}
          onClick={({ target }) => target.select()}
          value={foxes} onChange={({ target: { value } }) => setFoxes(Math.min(value, 64))} />
        <FormHelperText id="foxes-helper">
          Enter the number of foxes you have to transport
        </FormHelperText>
      </FormControl>
      
      <Button
        mt={8} 
        data-testid="calculate-button"
        onClick={() => {
            setResult(calculate(bags, geese, foxes));
            setStep(0);
          }}>
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
                  <CrossingsList key={result.crossings} crossings={result.crossings} step={step} setStep={setStep} />
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
