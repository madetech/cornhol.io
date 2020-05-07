import React from 'react';
import { List, ListItem } from '@chakra-ui/core';

const CrossingsList = ({ crossings }) => {
  return (
    <List>
    {
      crossings.map((crossing, i) => {
        const prefix = (i % 2) ? 'return with: ' : 'take ferry across with: ';

        if (crossing === '') {
          return <ListItem key={i} color="grey">{prefix} nothing</ListItem>
        }
        return <ListItem key={i}>{prefix} {crossing}</ListItem>;
      })
    }
    </List>
  );
};

export default CrossingsList;