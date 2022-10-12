import { BoxProps } from '@chakra-ui/react';
import React from 'react';
import { IList } from '../../../data/interfaces/IList';
import { KanbanListContext } from '../Context';
import { useKanbanListProvider } from './hook/useKanbanListProvider';

interface KanbanListProviderProps extends BoxProps {
  initialList: IList;
}

function KanbanListProvider({ children, initialList }: KanbanListProviderProps) {
  const { list, handleAddCard, handleRemoveCard } = useKanbanListProvider(initialList);
  return (
    <KanbanListContext.Provider value={{ list, handleAddCard, handleRemoveCard }}>
      {children}
    </KanbanListContext.Provider>
  );
}

export default KanbanListProvider;
