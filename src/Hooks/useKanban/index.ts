import { useContext } from 'react';
import { KanbanContext } from './Context';

export const useKanban = () => {
  return useContext(KanbanContext);
};
