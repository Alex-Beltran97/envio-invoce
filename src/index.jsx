import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { InvoiceProvider } from './context/InvoiceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ShopProvider>
        <InvoiceProvider>
          <App />
        </InvoiceProvider> 
      </ShopProvider>
    </Router>
  </React.StrictMode>
);
