import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movie Listing Website</h1>
        <MovieList />
      </div>
    );
  }
}

export default App;
