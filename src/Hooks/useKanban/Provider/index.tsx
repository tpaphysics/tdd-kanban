import { BoxProps } from '@chakra-ui/react';
import React from 'react';
import initialColumns from '../../../data/columns';
import { KanbanContext } from '../Context';
import { useKanbanProvider } from './hook/useKanbanProvider';

type KanbanProviderProps = BoxProps;

function KanbanProvider({ children }: KanbanProviderProps) {
  const { columns, setColumns, handleUpdateCards, handleUpdateLists, handleUpdateTask, onDragEnd } =
    useKanbanProvider(initialColumns);
  return (
    <KanbanContext.Provider
      value={{
        columns,
        setColumns,
        handleUpdateCards,
        handleUpdateLists,
        handleUpdateTask,
        onDragEnd,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
}

export default KanbanProvider;
