import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import EditableCard from '.';

describe('EditableCard.tsx test', () => {
  it('Should finished tag not to be in component', () => {
    const { getByText } = render(<EditableCard />);
    expect(() => getByText(/finished/)).toThrow();
  });

  it('Should it added finished when click in tag', () => {
    const { getByTestId, getByText } = render(<EditableCard />);
    fireEvent.click(getByTestId('tag-1'));
    expect(getByText('Finished')).toBeInTheDocument();
  });

  it('Should be possible edit the task', () => {
    const { getByTestId, getByText } = render(<EditableCard />);
    fireEvent.focus(getByTestId('editable-1'));
    fireEvent.change(getByTestId('input-1'), { target: { value: 'editingTask' } });
    fireEvent.blur(getByTestId('input-1'));

    expect(getByText('editingTask')).toBeInTheDocument();
  });
  it('Should it set the task to (Edit task) when the entry is empty and the enter key is pressed', () => {
    const { getByTestId, getByText } = render(<EditableCard />);
    fireEvent.focus(getByTestId('editable-1'));
    fireEvent.change(getByTestId('input-1'), { target: { value: '' } });
    fireEvent.keyDown(getByTestId('input-1'));

    expect(getByText('Edit task')).toBeInTheDocument();
  });
});
