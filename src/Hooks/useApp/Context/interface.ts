import { DropResult } from 'react-beautiful-dnd';
import { IColumn } from '../../../data/interfaces/IColumn';

export interface IAppContext {
  columns: IColumn[];
  handleUpdateCards: (updatedColumns: IColumn[]) => void;
  onDragEnd: (result: DropResult) => void;
}
