import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ArtistAnswer extends PureComponent {
  constructor(props) {
    super(props);

    this._handleInputClick = this._handleInputClick.bind(this);
  }

  render() {
    const {
      id,
      picture,
      artist,
    } = this.props;

    return <div className="artist">
      <input
        className="artist__input visually-hidden"
        type="radio"
        name="answer"
        value={`answer-${id}`}
        id={`answer-${id}`}
        onClick={this._handleInputClick}
      />
      <label className="artist__name" htmlFor={`answer-${id}`}>
        <img className="artist__picture" src={picture} alt={artist}/>
        {artist}
      </label>
    </div>;
  }

  _handleInputClick() {
    const {
      onAnswer,
      artist
    } = this.props;
    onAnswer(artist);
  }
}

ArtistAnswer.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ArtistAnswer;
