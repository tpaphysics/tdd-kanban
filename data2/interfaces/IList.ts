import { ICard } from './ICard';

export interface IList {
  title: string;
  bgList: string;
  tag: string;
  cards: ICard[];
}
