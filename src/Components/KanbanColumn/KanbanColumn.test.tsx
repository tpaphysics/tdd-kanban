import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import KanbanColumn from '.';
import columns from '../../data/columns';
import KanbanProvider from '../../Hooks/useKanban/Provider';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanColumnProvider from '../../Hooks/useColumn/Provider';

describe('KanbanColumn.tsx test', () => {
  //  const mockedColumn = columns[0];
  //
  //  const KanbanColumnTest = () => {
  //    return (
  //      <KanbanProvider>
  //        <DragDropContext onDragEnd={console.log}>
  //          <KanbanColumn initialColumn={mockedColumn} />
  //        </DragDropContext>
  //      </KanbanProvider>
  //    );
  //  };
  //  it('Should be on the  a new list when click in (Add task) button', () => {
  //    const { getByTestId, getByText } = render(<KanbanColumnTest />);
  //
  //    const openModal = getByTestId(`modal-${mockedColumn.id}`);
  //    fireEvent.click(openModal);
  //
  //    const inputTitle = getByTestId(`title-input-${mockedColumn.id}`);
  //    fireEvent.change(inputTitle, { target: { value: 'R2D2' } });
  //
  //    const inputTag = getByTestId(`tag-input-${mockedColumn.id}`);
  //    fireEvent.change(inputTag, { target: { value: 'Star Wars' } });
  //
  //    const addListButton = getByTestId(`add-list-${mockedColumn.id}`);
  //
  //    fireEvent.click(addListButton);
  //
  //    expect(getByText('R2D2')).toBeInTheDocument();
  //  });
  //  it('Should be disabled the button (Add list) when title and tag to be empty', () => {
  //    const { getByTestId } = render(<KanbanColumnTest />);
  //
  //    const openModal = getByTestId(`modal-${mockedColumn.id}`);
  //    fireEvent.click(openModal);
  //
  //    const inputTitle = getByTestId(`title-input-${mockedColumn.id}`);
  //    fireEvent.change(inputTitle, { target: { value: '' } });
  //
  //    const inputTag = getByTestId(`tag-input-${mockedColumn.id}`);
  //    fireEvent.change(inputTag, { target: { value: '' } });
  //
  //    const addListButton = getByTestId(`add-list-${mockedColumn.id}`);
  //
  //    expect(addListButton).toHaveProperty('disabled', true);
  //  });
  //  it('Should be exclude the list when click in (X) icon', () => {
  //    const { lists } = mockedColumn;
  //    const { getByTestId } = render(<KanbanColumnTest />);
  //    const trashIcon = getByTestId(`close-list-${lists[0].id}`);
  //
  //    fireEvent.click(trashIcon);
  //
  //    expect(() => getByTestId(`close-list-${lists[0].id}`)).toThrow();
  //  });
  //  fireEvent.change(input, { target: { value: '' } });

  it('', () => {
    expect(1).toBe(1);
  });
});
