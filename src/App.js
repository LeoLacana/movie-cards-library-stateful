import React from 'react';
import Header from './components/Header';
import './App.css';
import Data from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ Data } />
    </div>
  );
}

export default App;
