import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import KanbanColumn from '.';
import columns from '../../data/columns';

describe('KanbanColumn.tsx test', () => {
  const mockedColumn = columns[0];
  it('Should be on the  a new list when click in (Add task) button', () => {
    const { getByTestId, getByText } = render(<KanbanColumn initialColumn={mockedColumn} />);

    const openModal = getByTestId(`modal-${mockedColumn.id}`);
    fireEvent.click(openModal);

    const inputTitle = getByTestId(`title-input-${mockedColumn.id}`);
    fireEvent.change(inputTitle, { target: { value: 'R2D2' } });

    const inputTag = getByTestId(`tag-input-${mockedColumn.id}`);
    fireEvent.change(inputTag, { target: { value: 'Star Wars' } });

    const addListButton = getByTestId(`add-list-${mockedColumn.id}`);

    fireEvent.click(addListButton);

    expect(getByText('R2D2')).toBeInTheDocument();
  });
  it('Should be exclude the task card when click in trash icon', () => {
    const { cards } = mockedColumn;
    const { getByTestId } = render(<KanbanColumn initialColumn={mockedColumn} />);
    const trashIcon = getByTestId(`trash-icon-${cards[0].id}`);

    fireEvent.click(trashIcon);

    expect(() => getByTestId(`trash-icon-${cards[0].id}`)).toThrow();
  });
});
