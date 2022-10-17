import { IColumn } from '../../../data/interfaces/IColumn';
import { IList } from '../../../data/interfaces/IList';

export interface IKanbanColumnContext {
  column: IColumn;
  addList: ({ title, bgList, tag }: Omit<IList, 'id' | 'cards'>) => void;
  removeList: (listId: string) => void;
}
