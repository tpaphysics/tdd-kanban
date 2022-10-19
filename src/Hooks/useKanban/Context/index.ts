import { createContext } from 'react';
import { IKanbanContext } from './interface';

export const KanbanContext = createContext<IKanbanContext>({} as IKanbanContext);
