import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitulo: '',
      imagePath: '',
      storyline: '',
    };

    this.textWrittenTitle = this.textWrittenTitle.bind(this);
    this.textWrittenSubtitle = this.textWrittenSubtitle.bind(this);
    this.imagePathAdd = this.imagePathAdd.bind(this);
  }

  textWrittenTitle({ target }) {
    this.setState({ title: target.value });
  }

  textWrittenSubtitle({ target }) {
    this.setState({ subtitulo: target.value });
  }

  imagePathAdd({ target }) {
    this.setState({ imagePath: target.value });
  }

  textAreaWritten({ target }) {
    this.setState({ storyline: target.value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitulo, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            onChange={ this.textWrittenTitle }
            type="text"
            data-testid="title-input"
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            onChange={ this.textWrittenSubtitle }
            data-testid="subtitle-input"
            value={ subtitulo }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            onChange={ this.imagePathAdd }
            data-testid="image-input"
            value={ imagePath }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            type="texarea"
            onChange={ this.textAreaWritten }
            data-testid="storyline-input"
            value={ storyline }
          />
        </label>
        { onClick }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
