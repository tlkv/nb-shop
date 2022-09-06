import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/normalize.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StoreWrapper from './store/StoreWrapper';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreWrapper>
  </React.StrictMode>
);
