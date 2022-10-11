import { BoxProps } from '@chakra-ui/react';
import React from 'react';
import { KanbanListContext } from '../Context';

function KanbanListProvider({ children }: BoxProps) {
  return (
    <KanbanListContext.Provider value={{ value: true }}>{children}</KanbanListContext.Provider>
  );
}

export default KanbanListProvider;
