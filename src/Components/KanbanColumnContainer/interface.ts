import { StackProps } from '@chakra-ui/react';
import { IColumn } from '../../data/interfaces/IColumn';

export interface KanbanColumnContainerProps extends StackProps {
  columns: IColumn;
}
