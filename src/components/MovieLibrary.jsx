import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateBookmarked = this.updateBookmarked.bind(this);
    this.updateSeletedGenre = this.updateSeletedGenre.bind(this);
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

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateSearchText }
          bookmarked={ bookmarkedOnly }
          onBookmarkedChange={ this.updateBookmarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateSeletedGenre }
        />
      </div>
    );
  }
}

/* MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
}; */

export default MovieLibrary;
