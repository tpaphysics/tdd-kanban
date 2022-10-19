import cards from './cards';
import { ILists } from './interfaces/ILists';

export default {
  'a4557776-4933-404d-983e-3d502d73b332': {
    title: '📝  To Do',
    bgList: 'BLUE',
    tag: 'sucess',
    cards,
  },
  '196700bc-b6ff-4e6b-ad1b-3be61d771db7': {
    title: '💻  In Progress',
    bgList: 'PURPLE',
    tag: 'warning',
    cards: [],
  },
  'd6e2e822-47b5-4ba9-9df2-72bdd76f222e': {
    title: '🚀  Done',
    bgList: 'GREEN',
    tag: 'dedication',
    cards: [],
  },
  '9fe66e1e-1682-490d-89b6-91f901a29603': {
    title: '🤖  Experiments',
    bgList: 'BLACK',
    tag: 'priority',
    cards: [],
  },
} as ILists;
