import { BoxProps } from '@chakra-ui/react';
import { DroppableProvided } from 'react-beautiful-dnd';

export interface KanbanListProps extends BoxProps {
  provided?: DroppableProvided;
}
