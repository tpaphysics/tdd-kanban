import { BoxProps } from '@chakra-ui/react';
import { IList } from '../../data/interfaces/IList';

export interface KanbanListProps extends BoxProps {
  list: IList;
}
