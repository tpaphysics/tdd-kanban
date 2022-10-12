import { IList } from '../../../data/interfaces/IList';

export interface IKanbanListContext {
  list: IList;
  addCard: (task: string) => void;
  removeCard: (cardId: string) => void;
}
