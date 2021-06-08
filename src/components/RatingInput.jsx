import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { funcValue, stateValue } = this.props;
    return (
      <label htmlFor="rating-imput" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          onChange={ funcValue }
          data-testid="rating-input"
          value={ stateValue }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  funcValue: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default RatingInput;
