import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { describe } from 'vitest';
import App from './App';

describe('Simple App test', () => {
  it('Should text "Value=0" visible ', () => {
    const { getByText } = render(<App />);
    expect(getByText(/value=0/i)).toBeInTheDocument();
  });
});
