import { BoxProps } from '@chakra-ui/react';
import React from 'react';
import { IColumn } from '../../../data/interfaces/IColumn';
import { KanbanColumnContext } from '../Context';
import { useColumnProvider } from './hook/useColumnProvider';

interface KanbanColumnProviderProps extends BoxProps {
  initialColumn: IColumn;
}

function KanbanColumnProvider({ children, initialColumn }: KanbanColumnProviderProps) {
  const { column, addList, removeList } = useColumnProvider(initialColumn);
  return (
    <KanbanColumnContext.Provider value={{ column, addList, removeList }}>
      {children}
    </KanbanColumnContext.Provider>
  );
}

export default KanbanColumnProvider;
