import './App.css';

import React, { useEffect } from "react";

import Header from './Header/Header'
import Main from './pages/Main/Main'

import { setDefaultProps } from "react-on-visible";

function App() {
  useEffect(() => {
    document.body.classList.add('no-scrollbar')

    return () => {
      document.body.classList.remove('no-scrollbar')
    };
  }, []);

  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  );
}

export default App;
