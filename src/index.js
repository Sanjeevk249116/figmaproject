import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import ContextData from './authContex/ContextData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <ChakraProvider>
     <ContextData>
     <App />
     </ContextData>
  </ChakraProvider>
  </Provider>
  
);

reportWebVitals();
