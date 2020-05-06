import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import App from './App';

describe('<App />', () => {
  it('renders', () => {
    const { getByText } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    expect(getByText('🌽')).toBeInTheDocument();
  });

  it('shows a total of .75p for 1 corn and 1 goose', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const geeseInput = getByTestId('geese-input');
    fireEvent.change(geeseInput, { target: { value: '1' } });

    const cornInput = getByTestId('corn-input');
    fireEvent.change(cornInput, { target: { value: '1' } });

    const calculateButton = getByTestId('calculate-button');
    fireEvent.click(calculateButton);

    expect(getByTestId('cost')).toHaveTextContent('£0.75');
  });
});
