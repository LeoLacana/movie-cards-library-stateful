import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TitleInput />
        <SubtitleInput />
        <ImageInput />
        <StorylineInput />
        <RatingInput />
        { onClick }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
