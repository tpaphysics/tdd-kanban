import '@testing-library/jest-dom/extend-expect';

import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import KanbanList from '.';

describe('KanbanList.tsx test', () => {
  it('', () => {
    const { getByText } = render(<KanbanList />);
    expect(0).toBe(0);
  });
});
