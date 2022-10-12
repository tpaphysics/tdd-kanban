import { BoxProps } from '@chakra-ui/react';
import React from 'react';
import { IList } from '../../../data/interfaces/IList';
import { KanbanListContext } from '../Context';
import { useListProvider } from './hook/useListProvider';

interface KanbanListProviderProps extends BoxProps {
  initialList: IList;
}

function KanbanListProvider({ children, initialList }: KanbanListProviderProps) {
  const { list, handleAddCard, handleRemoveCard } = useListProvider(initialList);
  return (
    <KanbanListContext.Provider value={{ list, handleAddCard, handleRemoveCard }}>
      {children}
    </KanbanListContext.Provider>
  );
}

export default KanbanListProvider;
