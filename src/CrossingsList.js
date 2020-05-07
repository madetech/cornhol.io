import React from 'react';
import { Checkbox, List, ListItem } from '@chakra-ui/core';

const CrossingsList = ({ crossings }) => {
  return (
    <List>
    {
      crossings.map((crossing, i) => {
        const prefix = (i % 2) ? 'return with: ' : 'take ferry across with: ';

        return <ListItem padding={2} key={i}>
          <Checkbox size="md" mr={2} variantColor="green">
            {prefix} {(crossing === '') ? 'nothing' : crossing}
          </Checkbox>
        </ListItem>
      })
    }
    </List>
  );
};

export default CrossingsList;