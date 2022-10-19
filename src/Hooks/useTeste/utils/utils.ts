import { ICard } from '../../../data/interfaces/ICard';
import { IList } from '../../../data/interfaces/IList';

const changePosition = (cards: ICard[] | IList[] | any, from: number, to: number) => {
  cards.splice(to, 0, cards.splice(from, 1)[0]);
  return cards;
};

export { changePosition };
