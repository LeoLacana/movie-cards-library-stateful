import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { nome } = this.props;
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
        { nome }
      </header>
    );
  }
}

Header.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default Header;
