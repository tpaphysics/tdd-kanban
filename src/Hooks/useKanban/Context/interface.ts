import { Dispatch, SetStateAction } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { ICard } from '../../../data/interfaces/ICard';
import { IColumn } from '../../../data/interfaces/IColumn';
import { IList } from '../../../data/interfaces/IList';

export interface IKanbanContext {
  columns: IColumn[];
  setColumns: Dispatch<SetStateAction<IColumn[]>>;
  handleUpdateCards: (column: IColumn, list: IList, updatedCards: ICard[]) => void;
  handleUpdateLists: (column: IColumn, updatedList: IList[]) => void;
  handleUpdateTask: (column: IColumn, list: IList, cardId: string, updatedTask: string) => void;
  handleUpdateFinished: (column: IColumn, list: IList, cardId: string, finished: boolean) => void;
  onDragEnd: (result: DropResult) => void;
}
