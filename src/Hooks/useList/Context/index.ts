import { createContext } from 'react';
import { IKanbanListContext } from './interface';

export const KanbanListContext = createContext<IKanbanListContext>({} as IKanbanListContext);
