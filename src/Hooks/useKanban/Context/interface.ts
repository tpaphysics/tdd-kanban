import { DropResult } from 'react-beautiful-dnd';
import { ICard } from '../../../data/interfaces/ICard';
import { IColumn } from '../../../data/interfaces/IColumn';
import { IList } from '../../../data/interfaces/IList';

export interface IKanbanContext {
  columns: IColumn[];
  handleUpdateCards: (column: IColumn, list: IList, updatedCards: ICard[]) => void;
  handleUpdateLists: (column: IColumn, updatedList: IList[]) => void;
  onDragEnd: (result: DropResult) => void;
}
