import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import KanbanProvider from './Hooks/useKanban/Provider';
import { custonTheme } from './styles/custonTheme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={custonTheme}>
      <KanbanProvider>
        <App />
      </KanbanProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
