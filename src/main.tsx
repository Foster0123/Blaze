import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import "./assets/scss/main.scss";
import theme from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
