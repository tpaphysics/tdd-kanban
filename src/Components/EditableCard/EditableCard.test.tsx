import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import EditableCard from '.';
import KanbanListProvider from '../../Hooks/useList/Provider';
import columns from '../../data/columns';
import KanbanColumnProvider from '../../Hooks/useColumn/Provider';
import KanbanProvider from '../../Hooks/useKanban/Provider';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

describe('EditableCard.tsx test', () => {
  const mockedColumn = columns[0];
  const mockedList = mockedColumn.lists[0];
  const mockedCard = mockedList.cards[0];

  const ContainerTest = () => (
    <KanbanProvider>
      <KanbanColumnProvider initialColumn={mockedColumn}>
        <KanbanListProvider initialList={mockedList}>
          <DragDropContext onDragEnd={console.log}>
            <Droppable droppableId='some_id'>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <EditableCard card={mockedCard} cardIndex={0} />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </KanbanListProvider>
      </KanbanColumnProvider>
    </KanbanProvider>
  );

  it('Should finished tag not to be in component', () => {
    const { getByText, debug } = render(<ContainerTest />);
    debug();
    expect(getByText('Finished')).toBeInTheDocument();
  });

  it('Should it added finished when click in tag', () => {
    const { getByTestId, getByText } = render(<ContainerTest />);
    fireEvent.click(getByTestId(`tag-${mockedCard.id}`));
    expect(() => getByText('Finished')).toThrow();
  });

  it('Should be possible edit the task', () => {
    const { getByTestId, getByText } = render(<ContainerTest />);
    fireEvent.focus(getByTestId(`editable-${mockedCard.id}`));
    fireEvent.change(getByTestId(`input-${mockedCard.id}`), { target: { value: 'editingTask' } });
    fireEvent.blur(getByTestId(`input-${mockedCard.id}`));

    expect(getByText('editingTask')).toBeInTheDocument();
  });
  it('Should it set the task to (Edit task) when the entry is empty and the enter key is pressed', () => {
    const { getByTestId, getByText } = render(<ContainerTest />);
    fireEvent.click(getByTestId(`edit-icon-${mockedCard.id}`));
    fireEvent.change(getByTestId(`input-${mockedCard.id}`), { target: { value: '' } });
    fireEvent.click(getByTestId(`check-edit-icon-${mockedCard.id}`));

    expect(getByText('Edit task')).toBeInTheDocument();
  });
  it('Should not be edited the card when click on (x) button', () => {
    const { getByTestId, getByText, debug } = render(<ContainerTest />);
    fireEvent.click(getByTestId(`edit-icon-${mockedCard.id}`));
    fireEvent.change(getByTestId(`input-${mockedCard.id}`), { target: { value: 'Click' } });
    fireEvent.click(getByTestId(`close-edit-icon-${mockedCard.id}`));
    debug();
    expect(() => getByText('Click')).toThrow();
  });
});
