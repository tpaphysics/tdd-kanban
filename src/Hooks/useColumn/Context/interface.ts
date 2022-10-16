import { IColumn } from '../../../data/interfaces/IColumn';

export interface IKanbanColumnContext {
  column: IColumn;
  addList: (title: string, bgColor: string, tag: string) => void;
  removeList: (listId: string) => void;
}
