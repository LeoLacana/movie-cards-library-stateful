import React from 'react';
import Header from './components/Header';
import './App.css';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <App movies={ Data } />
    </div>
  );
}

export default App;
