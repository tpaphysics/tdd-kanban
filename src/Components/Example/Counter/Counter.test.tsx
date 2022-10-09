import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { custonTheme } from '../../../styles/custonTheme';
import Counter from './Counter';

describe('Simple App test', () => {
  it('Should text "Value=0" visible', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('Value=0')).toBeInTheDocument();
  });

  it('Should text "Value=1" visible when user click in Increment Button', () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText(/Increment/i));
    expect(getByText(/Value=1/i)).toBeInTheDocument();
  });

  it('Should text "Value=-1" visible when user click in Decrement button ', () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText(/Decrement/i));
    expect(getByText(/Value=-1/i)).toBeInTheDocument();
  });

  it('Should button with text Increment should style with padding equal 0', () => {
    const { getByText } = render(
      <ChakraProvider theme={custonTheme}>
        <Counter />
      </ChakraProvider>,
    );
    expect(getByText(/increment/i)).toHaveStyle({
      padding: '0',
    });
  });
});
