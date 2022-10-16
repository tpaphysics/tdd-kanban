import { createContext } from 'react';
import { IKanbanColumnContext } from './interface';

export const KanbanColumnContext = createContext<IKanbanColumnContext>({} as IKanbanColumnContext);
