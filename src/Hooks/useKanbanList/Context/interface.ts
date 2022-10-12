import { IList } from '../../../data/interfaces/IList';

export interface IKanbanListContext {
  list: IList;
  handleAddCard: (task: string) => void;
  handleRemoveCard: (cardId: string) => void;
}
