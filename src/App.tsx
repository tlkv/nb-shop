import React from 'react';
import './sass/normalize.scss';
import Header from './components/Header/Header';
import s from './sass/App.module.scss';
import SneakerList from './components/SneakerCardList/SneakerCardList';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <main className={s.MainContainer}>
        <SneakerList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
