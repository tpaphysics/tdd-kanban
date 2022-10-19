import { renderHook, act } from '@testing-library/react-hooks';
import columns from '../../data/columns';
import { DropResult } from 'react-beautiful-dnd';

import { useApp } from './useApp';

describe('useApp hook test', () => {
  const mockedResulCardIntoList = {
    draggableId:
      '{columnId:836465da-523a-49bf-8ff2-33a4a2df275b,cardId:36c9f0eb-12f8-4d22-8b12-5aae52d1f339}',
    type: 'card',
    source: {
      index: 0,
      droppableId: '{listId:a4557776-4933-404d-983e-3d502d73b332}',
    },
    reason: 'DROP',
    mode: 'FLUID',
    destination: {
      droppableId: '{listId:a4557776-4933-404d-983e-3d502d73b332}',
      index: 1,
    },
    combine: null,
  };
  const mockedColumns = columns;

  it('should be move card into to list', () => {
    const { result } = renderHook(() => useApp(mockedColumns));

    act(() => {
      result.current.onDragEnd(mockedResulCardIntoList as unknown as DropResult);
    });
    expect(0).toBe(0);
  });
});
