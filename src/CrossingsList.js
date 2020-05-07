import React from 'react';
import { Button, Text, ButtonGroup } from '@chakra-ui/core';

const CrossingsList = ({ crossings, step, setStep }) => {
const prefix = (step % 2) ? 'return with ' : 'take ferry across with ';

if (step >= crossings.length) {
  return <Text>Finished</Text>;
}

return (
    <>
      <Text padding={2}>
        Step {step+1} of {crossings.length}: {prefix} {(crossings[step] === '') ? 'nothing' : crossings[step]}
      </Text>
      <ButtonGroup>
        <Button onClick={() => {setStep(Math.max(step-1, 0))}}>Previous</Button>  
        <Button onClick={() => {setStep(step+1)}}>Next</Button>
      </ButtonGroup>
    </>
);
};

export default CrossingsList;