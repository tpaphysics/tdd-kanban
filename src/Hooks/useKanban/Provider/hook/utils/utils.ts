import { ICard } from '../../../../../data/interfaces/ICard';
import { IColumn } from '../../../../../data/interfaces/IColumn';
import { IList } from '../../../../../data/interfaces/IList';

const changePosition = (cards: ICard[] | IList[] | any, from: number, to: number) => {
  cards.splice(to, 0, cards.splice(from, 1)[0]);
  return cards;
};

const setStorage = (columns: IColumn[]) => {
  localStorage.setItem('kanban:columns', JSON.stringify(columns));
};

const getStorage = () => {
  const getColumns = localStorage.getItem('kanban:columns');
  if (getColumns) return JSON.parse(getColumns as string);
  return;
};

export { changePosition, setStorage, getStorage };
