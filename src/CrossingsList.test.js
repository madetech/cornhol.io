import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import CrossingsList from './CrossingsList';

describe('<CrossingsList />', () => {
  it('renders nothings', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CrossingsList crossings={['']} step={0} />
      </ThemeProvider>
    );
    
    expect(getByText(/take ferry across with nothing/)).toBeInTheDocument();
  });

  it('renders return with for return journeys', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CrossingsList crossings={['goose', 'corn']} step={1} />
      </ThemeProvider>
    );
    
    expect(getByText(/return with corn/)).toBeInTheDocument();
  });
});