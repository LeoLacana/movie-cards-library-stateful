import React from 'react';
import './App.css';
import Data from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ Data } />
    </div>
  );
}

export default App;
