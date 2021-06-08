import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import SelectInputText from './SelectInputText';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.textWrittenTitle = this.textWrittenTitle.bind(this);
    this.textWrittenSubtitle = this.textWrittenSubtitle.bind(this);
    this.imagePathAdd = this.imagePathAdd.bind(this);
    this.textAreaWritten = this.textAreaWritten.bind(this);
    this.textRating = this.textRating.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
  }

  textWrittenTitle({ target }) {
    this.setState({ title: target.value });
  }

  textWrittenSubtitle({ target }) {
    this.setState({ subtitle: target.value });
  }

  imagePathAdd({ target }) {
    this.setState({ imagePath: target.value });
  }

  textAreaWritten({ target }) {
    this.setState({ storyline: target.value });
  }

  textRating({ target }) {
    this.setState({ rating: target.value });
  }

  selectGenre({ target }) {
    this.setState({ genre: target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TitleInput funcValue={ this.textWrittenTitle } stateValue={ title } />
        <SubtitleInput funcValue={ this.textWrittenSubtitle } stateValue={ subtitle } />
        <ImageInput funcValue={ this.imagePathAdd } stateValue={ imagePath } />
        <StorylineInput funcValue={ this.textAreaWritten } stateValue={ storyline } />
        <RatingInput funcValue={ this.textRating } stateValue={ rating } />
        <SelectInputText funcValue={ this.selectGenre } stateValue={ genre } />
        { onClick }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
