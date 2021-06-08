import React from 'react';
import PropTypes from 'prop-types';

class SelectInputText extends React.Component {
  render() {
    const { funcValue, stateValue } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        <select
          name="genre"
          data-testid="genre-input"
          onChange={ funcValue }
          value={ stateValue }
        >
          Gênero
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectInputText.propTypes = {
  funcValue: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default SelectInputText;
