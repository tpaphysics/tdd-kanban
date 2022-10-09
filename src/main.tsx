import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { custonTheme } from './styles/custonTheme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={custonTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
