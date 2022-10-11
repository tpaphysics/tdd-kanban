import { ICard } from './ICard';

export interface IList {
  id: string;
  title: string;
  bgList: string;
  tag: string;
  cards: ICard[];
}
