import { useContext } from 'react';
import { KanbanListContext } from './Context';

export const useList = () => {
  return useContext(KanbanListContext);
};
