import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GenreAnswer extends PureComponent {
  constructor(props) {
    super(props);

    this._onPlayBtnClick = this._onPlayBtnClick.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  render() {
    const {
      activePlayer,
      src,
      id,
    } = this.props;

    return <div className="track" >
      <AudioPlayer
        src={src}
        isPlaying={activePlayer === id}
        onPlayBtnClick={this._onPlayBtnClick}
      />
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value={`answer-${id}`}
          id={`answer-${id}`}
          onChange={this._handleInputChange}
        />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>;
  }

  _onPlayBtnClick() {
    const {
      onPlayBtnClick,
      id,
    } = this.props;
    onPlayBtnClick(id);
  }

  _handleInputChange() {
    const {
      onChange,
      id,
    } = this.props;
    onChange(id);
  }
}

GenreAnswer.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreAnswer;
