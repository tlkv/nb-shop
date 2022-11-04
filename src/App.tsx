import React from 'react';
import logo from './assets/svg/logo.svg';
import './sass/App.scss';
import './sass/normalize.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <i className="fa-solid fa-check" />
          Edit <code>src/App.tsx</code> and save to reload.
          <i className="fa-solid fa-check" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
