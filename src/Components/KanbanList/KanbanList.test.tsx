import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import KanbanList from '.';
import lists from '../../data/lists';

describe('KanbanList.tsx test', () => {
  const mockedList = lists[0];
  it('Should add a new card when click in (Add task) button', () => {
    const { getByTestId, getByText, debug } = render(<KanbanList list={mockedList} />);
    const input = getByTestId('task-input');
    const button = getByText('Add task');
    debug();
    fireEvent.change(input, { target: { value: 'r2d2' } });
    fireEvent.click(button);

    expect(getByText('r2d2')).toBeInTheDocument();
  });
});
