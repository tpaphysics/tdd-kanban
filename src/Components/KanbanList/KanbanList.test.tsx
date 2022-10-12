import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import KanbanList from '.';
import lists from '../../data/lists';

describe('KanbanList.tsx test', () => {
  const mockedList = lists[0];
  it('Should add a new card when click in (Add task) button', () => {
    const { getByTestId, getByText } = render(<KanbanList list={mockedList} />);
    const input = getByTestId('task-input');
    const button = getByText('Add task');
    fireEvent.change(input, { target: { value: 'r2d2' } });
    fireEvent.click(button);

    expect(getByText('r2d2')).toBeInTheDocument();
  });
  it('Should be exclude the task card when click in trash icon', () => {
    const { cards } = mockedList;
    const { getByTestId } = render(<KanbanList list={mockedList} />);
    const trashIcon = getByTestId(`trash-icon-${cards[0].id}`);

    fireEvent.click(trashIcon);

    expect(() => getByTestId(`trash-icon-${cards[0].id}`)).toThrow();
  });
});
