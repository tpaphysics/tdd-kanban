import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import FormAddCard from '.';

describe('FormAddCard.tsx test', () => {
  it('Should not to be in FormAddCard the icon (+) when click in Add Card text', () => {
    const { getByTestId } = render(<FormAddCard />);

    fireEvent.click(getByTestId('icon-add'));
    expect(() => getByTestId('icon-add')).toThrow();
  });
  it('Should to be in FormAddCard the icon (-) when click in Add Card text', () => {
    const { getByTestId } = render(<FormAddCard />);

    fireEvent.click(getByTestId('icon-add'));
    expect(getByTestId('icon-minus')).toBeInTheDocument();
  });
});
