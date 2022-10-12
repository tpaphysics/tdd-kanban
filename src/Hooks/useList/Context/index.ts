import { createContext } from 'react';
import { IKanbanListContext } from './interface';

const KanbanListContext = createContext<IKanbanListContext>({} as IKanbanListContext);

export { KanbanListContext };
