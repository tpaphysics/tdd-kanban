import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { act, fireEvent, render } from '@testing-library/react';

import FormAddCard from '.';

describe('FormAddCard.tsx test', () => {
  it('Should not to be in FormAddCard the icon (+) when click in (Add card) text', () => {
    const { getByTestId, getByText } = render(<FormAddCard />);

    fireEvent.click(getByText(/add card/i));
    expect(() => getByTestId('icon-add')).toThrow();
  });
  it('Should to be in FormAddCard the icon (-) when click in (Add card) text', () => {
    const { getByTestId, getByText } = render(<FormAddCard />);

    fireEvent.click(getByText(/add card/i));
    expect(getByTestId('icon-minus')).toBeInTheDocument();
  });

  it('Should to be in FormAddCard the icon (+) when click in (Add card) text two times', () => {
    const { getByTestId, getByText } = render(<FormAddCard />);

    fireEvent.click(getByText(/add card/i));
    fireEvent.click(getByText(/add card/i));

    expect(getByTestId('icon-add')).toBeInTheDocument();
  });

  it('Should to be in FormAddCard the input and button', () => {
    const { getByTestId } = render(<FormAddCard />);

    expect(getByTestId('task-button')).toBeInTheDocument();
    expect(getByTestId('task-input')).toBeInTheDocument();
  });
  it('Should be disable the button when input is empty', () => {
    const { getByTestId } = render(<FormAddCard />);
    const input = getByTestId('task-input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });

    expect(input.disabled).toBe(false);
  });
  it('Should be disable button when change for TEST the value in input', () => {
    const { getByTestId } = render(<FormAddCard />);

    const input = getByTestId('task-input') as HTMLInputElement;
    const button = getByTestId('task-button') as HTMLButtonElement;

    fireEvent.change(input, { target: { value: 'TEST' } });
    getByTestId('task-button');

    expect(button.disabled).toBe(false);
  });
});
