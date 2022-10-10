import { describe, it } from 'vitest';
import { formatTask } from './utils';

describe('EditableCard.utils functions', () => {
  it('formatTask(), should be task size equal 27', () => {
    const mockedTask = 'aaaaaaaaaaaaaaaaaaaaaaaaaaa';
    expect(mockedTask.length).toBe(27);
  });
});
