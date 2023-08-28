import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {
  render() {
    const { title, poster, year } = this.props.movie;

    return (
      <div className="movie-card">
        <img src={poster} alt={title} />
        <div className="movie-details">
          <p className="movie-title">{title}</p>
          <p className="movie-year">{year}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
