import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { funcValue, stateValue } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          onChange={ funcValue }
          data-testid="storyline-input"
          value={ stateValue }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  funcValue: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default StorylineInput;
