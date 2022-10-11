import { IList } from '../../../data/interfaces/IList';

export interface IKanbanListContext {
  list: IList;
  handlerAddCard: (task: string) => void;
}
