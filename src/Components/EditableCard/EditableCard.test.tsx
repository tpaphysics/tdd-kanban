import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import EditableCard from '.';
import KanbanListProvider from '../../Hooks/useList/Provider';
import lists from '../../data/lists';
import { useList } from '../../Hooks/useList';

describe('EditableCard.tsx test', () => {
  const mockedCard = lists[0].cards[0];
  const mockedList = lists[0];
  function EditableCardTest() {
    const { list } = useList();
    return <EditableCard card={list.cards[0]} />;
  }

  it('Should finished tag not to be in component', () => {
    const { getByText, debug } = render(
      <KanbanListProvider initialList={mockedList}>
        <EditableCardTest />
      </KanbanListProvider>,
    );
    debug();
    expect(getByText('Finished')).toBeInTheDocument();
  });

  it('Should it added finished when click in tag', () => {
    const { getByTestId, getByText } = render(
      <KanbanListProvider initialList={mockedList}>
        <EditableCardTest />
      </KanbanListProvider>,
    );
    fireEvent.click(getByTestId(`tag-${mockedCard.id}`));
    expect(() => getByText('Finished')).toThrow();
  });

  it('Should be possible edit the task', () => {
    const { getByTestId, getByText } = render(
      <KanbanListProvider initialList={mockedList}>
        <EditableCardTest />
      </KanbanListProvider>,
    );
    fireEvent.focus(getByTestId(`editable-${mockedCard.id}`));
    fireEvent.change(getByTestId(`input-${mockedCard.id}`), { target: { value: 'editingTask' } });
    fireEvent.blur(getByTestId(`input-${mockedCard.id}`));

    expect(getByText('editingTask')).toBeInTheDocument();
  });
  it('Should it set the task to (Edit task) when the entry is empty and the enter key is pressed', () => {
    const { getByTestId, getByText } = render(
      <KanbanListProvider initialList={mockedList}>
        <EditableCardTest />
      </KanbanListProvider>,
    );
    fireEvent.focus(getByTestId(`editable-${mockedCard.id}`));
    fireEvent.change(getByTestId(`input-${mockedCard.id}`), { target: { value: '' } });
    fireEvent.keyDown(getByTestId(`input-${mockedCard.id}`));

    expect(getByText('Edit task')).toBeInTheDocument();
  });
});
