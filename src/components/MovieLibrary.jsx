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
    this.addMovies = this.addMovies.bind(this);
  }

  updateSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  updateBookmarked({ target }) {
    this.setState({ bookmarkedOnly: target.value });
  }

  updateSeletedGenre({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (selectedGenre) return movies.filter(({ genre }) => genre === selectedGenre);
    if (bookmarkedOnly) return movies.filter(({ bookmarked }) => bookmarked);
    if (searchText) {
      return movies
        .filter(({ title, subtitle, storyline }) => {
          const textToSearchFor = `${title}${subtitle}${storyline}`.toLowerCase();
          return textToSearchFor.includes(searchText.toLowerCase());
        });
    }
    return movies;
  }

  addMovies(newMovies) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, newMovies],
    }));
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
          <AddMovie onClick={ this.addMovies } />
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
