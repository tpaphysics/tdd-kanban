import { describe, it } from 'vitest';
import { formatTask } from './utils';

describe('EditableCard.utils functions', () => {
  const mockedTask = 'aaaaaaaaaaaaaaaaaaaaaaaaaaa';
  it('formatTask(), should be task size equal 27', () => {
    expect(mockedTask.length).toBe(27);
  });
  it('formatTask(), should be resultTask equal 25', () => {
    const resultTask = formatTask(mockedTask);
    expect(resultTask.length).toBe(25);
  });
  it('formatTask(), should it contain (...) in resultTask', () => {
    const resultTask = formatTask(mockedTask);
    expect(resultTask.includes('...')).toEqual(true);
  });
});
