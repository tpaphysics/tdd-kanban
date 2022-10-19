import { BoxProps } from '@chakra-ui/react';
import React from 'react';
import { IColumn } from '../../../data/interfaces/IColumn';
import { AppContext } from '../Context';
import { useAppProvider } from './hook/useAppProvider';

interface AppProviderProps extends BoxProps {
  initialColumns: IColumn[];
}

function AppProvider({ children, initialColumns }: AppProviderProps) {
  const { columns, handleUpdateCards, onDragEnd } = useAppProvider(initialColumns);
  return (
    <AppContext.Provider value={{ columns, handleUpdateCards, onDragEnd }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
