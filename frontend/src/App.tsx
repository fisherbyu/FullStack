import React from 'react';
import './App.css';
import NavBar from './Banner';
import Podcasts from './Podcasts';
import Home from './Home';
// import Header from './Header';
import MovieList from './movie/MovieList';

function App() {
  //Define Path for Page Display
  const path = window.location.pathname;
  let content;
  // Allow for changing of the Routes
  content = <Home />
  if (path === '/movies') {
      content = <MovieList />;
  }
  else if (path === '/podcasts') {
      content = <Podcasts />;
  }
  //Render out Selected Content with Common Navbar
  return (
      <div className="App">
      <NavBar />
      {content}
      </div>
  );
  }

export default App;