import { ICard } from '../../../data/interfaces/ICard';

export interface EditableControlsProps {
  card: ICard;
  handleRemoveCard: () => void;
  handleClickCheck: () => void;
  handleClickCloseEdit: () => void;
}
