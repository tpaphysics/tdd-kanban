import { useContext } from 'react';
import { KanbanColumnContext } from './Context';

export const useColumn = () => {
  return useContext(KanbanColumnContext);
};
