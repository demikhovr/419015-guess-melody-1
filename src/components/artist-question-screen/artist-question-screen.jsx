import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';
import ArtistAnswer from '../artist-answer/artist-answer.jsx';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handlePlayBtnClick = this._handlePlayBtnClick.bind(this);
  }

  render() {
    const {isPlaying} = this.state;
    const {
      question,
      onAnswer,
    } = this.props;
    const {
      song,
      answers,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <AudioPlayer
          src={song.src}
          isPlaying={isPlaying}
          onPlayBtnClick={this._handlePlayBtnClick}
        />
      </div>
      <form className="game__artist">
        {answers.map((it, i) => <ArtistAnswer
          key={`answer-${it.artist}`}
          id={i}
          {...it}
          onAnswer={onAnswer}
        />)}
      </form>
    </section>;
  }

  _handlePlayBtnClick() {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  }
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
