import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateBookmarked = this.updateBookmarked.bind(this);
    this.updateSeletedGenre = this.updateSeletedGenre.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.setMovies = this.setMovies.bind(this);
  }

  setMovies(event) {
    this.setState((a) => ({
      movies: [...a.movies, event],
    }));
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (selectedGenre) {
      return movies.filter(({ genre }) => genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      return movies.filter(({ bookmarked }) => bookmarked);
    }
    if (searchText) {
      return movies.filter(({ title, subtitle, storyline }) => {
        const text = `${title}${subtitle}${storyline}`.toLowerCase();
        return text.includes(searchText.toLowerCase());
      });
    }
    return movies;
  }

  updateSeletedGenre({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  updateBookmarked({ target }) {
    this.setState({ bookmarkedOnly: target.value });
  }

  updateSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <p>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.updateSearchText }
            bookmarked={ bookmarkedOnly }
            onBookmarkedChange={ this.updateBookmarked }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.updateSeletedGenre }
          />
        </p>
        <p>
          <MovieList movies={ this.filterMovies() } />
        </p>
        <p>
          <AddMovie onClick={ this.setMovies } />
        </p>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
