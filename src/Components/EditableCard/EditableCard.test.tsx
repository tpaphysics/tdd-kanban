import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import EditableCard from '.';

describe('EditableCard.tsx test', () => {
  it('Should finished tag not to be in component', () => {
    const { getByText } = render(<EditableCard />);
    expect(() => getByText(/finished/)).toThrow();
  });
});
