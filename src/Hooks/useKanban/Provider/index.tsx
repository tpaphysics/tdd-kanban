import { BoxProps } from '@chakra-ui/react';
import React from 'react';
import initialColumns from '../../../data/columns';
import { KanbanContext } from '../Context';
import { useKanbanProvider } from './hook/useKanbanProvider';

type KanbanProviderProps = BoxProps;

function KanbanProvider({ children }: KanbanProviderProps) {
  const { columns, handleUpdateCards, handleUpdateLists } = useKanbanProvider(initialColumns);
  return (
    <KanbanContext.Provider value={{ columns, handleUpdateCards, handleUpdateLists }}>
      {children}
    </KanbanContext.Provider>
  );
}

export default KanbanProvider;
