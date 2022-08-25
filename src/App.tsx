import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SneakerCatalog from './components/SneakerCatalog/SneakerCatalog';
import Basket from './components/Basket/Basket';
import SneakerDetails from './components/SneakerDetails/SneakerDetails';
import s from './styles/App.module.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={s.mainContainer}>
        <Routes>
          <Route path="/sneakers/:model" element={<SneakerDetails />} />
          <Route path="*" element={<SneakerCatalog />} />
        </Routes>
        <Basket />
      </div>
    </div>
  );
}

export default App;
