import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// dev-7a2xqm41r65avkk2.us.auth0.com
// zpY0nrLh0lUebzbpBCsmpD9OCoPSX2pQ
root.render(
    <Auth0Provider
    domain="dev-7a2xqm41r65avkk2.us.auth0.com"
    clientId="zpY0nrLh0lUebzbpBCsmpD9OCoPSX2pQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation='localstorage'
  >
    <UserProvider>
    <ProductsProvider>
        <FilterProvider>
            <CartProvider>
            <App />
            </CartProvider>
            
        </FilterProvider>
        
    </ProductsProvider>
    </UserProvider>
    </Auth0Provider>
);
