import { BoxProps } from '@chakra-ui/react';
import React from 'react';
import { IList } from '../../../data/interfaces/IList';
import { KanbanListContext } from '../Context';
import { useListProvider } from './hook/useListProvider';

interface KanbanListProviderProps extends BoxProps {
  initialList: IList;
}

function KanbanListProvider({ children, initialList }: KanbanListProviderProps) {
  const { list, addCard, removeCard } = useListProvider(initialList);
  return (
    <KanbanListContext.Provider value={{ list, addCard, removeCard }}>
      {children}
    </KanbanListContext.Provider>
  );
}

export default KanbanListProvider;
