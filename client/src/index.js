import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import App from './App';

import './index.css';
import Provider from './Context/Provider';

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
