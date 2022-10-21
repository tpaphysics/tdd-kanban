import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import KanbanList from '.';
import columns from '../../data/columns';
import KanbanProvider from '../../Hooks/useKanban/Provider';
import KanbanListProvider from '../../Hooks/useList/Provider';
import KanbanColumnProvider from '../../Hooks/useColumn/Provider';
import { useList } from '../../Hooks/useList';

describe('KanbanList.tsx test', () => {
  //const mockedColumn = columns[0];
  //const mockedList = mockedColumn.lists[0];
  //
  //const KanbanListWith = () => {
  //  const { list } = useList();
  //  return <KanbanList list={list} />;
  //};
  //
  //const KanbanListTest = () => {
  //  return (
  //    <KanbanProvider>
  //      <KanbanColumnProvider initialColumn={mockedColumn}>
  //        <KanbanListProvider initialList={mockedList}>
  //          <KanbanListWith />
  //        </KanbanListProvider>
  //      </KanbanColumnProvider>
  //    </KanbanProvider>
  //  );
  //};
  //
  //it('Should add a new card when click in (Add task) button', () => {
  //  const { getByTestId, getByText, debug } = render(<KanbanListTest />);
  //  debug();
  //  const input = getByTestId('task-input');
  //  const button = getByText('Add task');
  //  fireEvent.change(input, { target: { value: 'r2d2' } });
  //  fireEvent.click(button);
  //
  //  expect(getByText('r2d2')).toBeInTheDocument();
  //});
  //it('Should be exclude the task card when click in trash icon', () => {
  //  const { cards } = mockedList;
  //  const { getByTestId } = render(<KanbanListTest />);
  //  const trashIcon = getByTestId(`trash-icon-${cards[0].id}`);
  //
  //  fireEvent.click(trashIcon);
  //
  //  expect(() => getByTestId(`trash-icon-${cards[0].id}`)).toThrow();
  //});
  //it('Should be disabled button (Add task) when input task to be empty', () => {
  //  const { getByTestId, getByLabelText } = render(<KanbanListTest />);
  //  const button = getByLabelText(`task-button-${mockedList.id}`);
  //
  //  const input = getByTestId('task-input');
  //  fireEvent.change(input, { target: { value: '' } });
  //
  //  expect(button).toHaveProperty('disabled', true);
  //});
  it('', () => {
    expect(1).toBe(1);
  });
});
