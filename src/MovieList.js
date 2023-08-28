import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies('war');
  }

  fetchMovies = (searchTerm) => {
    axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${searchTerm}`)
      .then(response => {
        this.setState({ movies: response.data.Search });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  handleSearch = (searchTerm) => {
    this.fetchMovies(searchTerm);
  }

  render() {
    return (
      <div className="movie-list">
        <SearchBar onSearch={this.handleSearch} />
        {this.state.movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;

