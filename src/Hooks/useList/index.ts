import { useContext } from 'react';
import { KanbanListContext } from './Context';

export const useList = () => {
  const hook = useContext(KanbanListContext);
  if (!hook) {
    console.warn('Your component should be countain KanbanListProvider!');
  } else {
    return hook;
  }
};
