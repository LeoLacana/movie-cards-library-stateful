import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange } = this.props;
    // bookmarkedOnly,
    // onBookmarkedChange,
    // selectedGenre,
    /* onSelectedGenreChange } */

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search-bar-input" data-testid="text-input-label">
            Inclui o texto
            <input
              type="text"
              id="search-bar-input"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
// bookmarkedOnly: PropTypes.bool.isRequired,
// onBookmarkedChange: PropTypes.func.isRequired,
// selectedGenre: PropTypes.string.isRequired,
// onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
