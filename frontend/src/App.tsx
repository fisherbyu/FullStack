import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MovieList from './movie/MovieList';

function App() {
  return (
    <div className="App">
      <Header/>
      <MovieList/>
    </div>
  );
}

export default App;
