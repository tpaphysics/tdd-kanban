import '@testing-library/jest-dom/extend-expect';

import { describe, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import FormAddCard from '.';
import KanbanListProvider from '../../Hooks/useList/Provider';

import KanbanColumnProvider from '../../Hooks/useColumn/Provider';
import KanbanProvider from '../../Hooks/useKanban/Provider';
import columns from '../../data/columns';

describe('FormAddCard.tsx test', () => {
  const mockedColumn = columns[0];
  const mockedList = mockedColumn.lists[0];

  function Test() {
    return (
      <KanbanProvider>
        <KanbanColumnProvider initialColumn={mockedColumn}>
          <KanbanListProvider initialList={mockedList}>
            <FormAddCard />
          </KanbanListProvider>
        </KanbanColumnProvider>
      </KanbanProvider>
    );
  }
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  it('Should not to be in FormAddCard the icon (+) when click in (Add task) text', () => {
    const { getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('icon-add'));
    expect(() => getByTestId('icon-add')).toThrow();
  });
  it('Should to be in the component the icon (-) when click in (+ Add task)', () => {
    const { getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('icon-add'));
    expect(getByTestId('icon-minus')).toBeInTheDocument();
  });

  it('Should to be the component the icon (+) when click in (+ Add task) text two times', () => {
    const { getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('view-more-add-task'));
    fireEvent.click(getByTestId('view-more-add-task'));

    expect(getByTestId('icon-add')).toBeInTheDocument();
  });

  it('Should to be in FormAddCard the input and button', () => {
    const { getByTestId } = render(<Test />);

    expect(getByTestId('task-button')).toBeInTheDocument();
    expect(getByTestId('task-input')).toBeInTheDocument();
  });
  it('Should be disable the button when input is empty', () => {
    const { getByTestId } = render(<Test />);
    const input = getByTestId('task-input');

    fireEvent.change(input, { target: { value: '' } });

    expect(input).toHaveProperty('disabled', false);
  });
  it('Should be disable button when change for TEST the value in input', () => {
    const { getByTestId } = render(<Test />);

    const input = getByTestId('task-input');
    const button = getByTestId('task-button');

    fireEvent.change(input, { target: { value: 'TEST' } });
    getByTestId('task-button');

    expect(button).toHaveProperty('disabled', false);
  });

  it('Should be updated input value for empty when click in (Add task) button', () => {
    const { getByTestId } = render(<Test />);

    const input = getByTestId('task-input') as HTMLInputElement;
    const button = getByTestId('task-button');

    fireEvent.change(input, { target: { value: 'TEST' } });
    expect(input).toHaveProperty('value', 'TEST');

    fireEvent.click(button);
    console.log(input.value, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

    expect(input).toHaveProperty('value', '');
  });
});
