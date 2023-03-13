import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from './contexts/user-context';
import { ProductsContextProvider } from './contexts/products-context';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
