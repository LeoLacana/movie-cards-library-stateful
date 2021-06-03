import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { onClick }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
