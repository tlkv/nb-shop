import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import './styles/index.scss';
import './styles/normalize.scss';
import { hydrate } from './store/reducers/cartSlice';
import { BasketStore } from './data/types';
import getLocalStorage from './utils/getLocalStorage';

const currentStore: BasketStore = getLocalStorage();
if (currentStore) {
  store.dispatch(hydrate(currentStore));
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
