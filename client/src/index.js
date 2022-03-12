import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import App from './App';

import './index.css';
import Provider from './Context/Provider';
import { SocketContext, socket } from './Context/SocketContext';

ReactDOM.render(
  <BrowserRouter>
    <SocketContext.Provider value={socket}>
      <Provider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </SocketContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
