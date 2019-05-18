import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: null,
    };

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handlePlayBtnClick = this._handlePlayBtnClick.bind(this);
  }

  render() {
    const {activePlayer} = this.state;
    const {question} = this.props;
    const {
      genre,
      answers,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={this._handleFormSubmit}>
        {answers.map((it, i) => <div className="track" key={`answer-${it.genre}-${i}`}>
          <AudioPlayer
            src={it.src}
            isPlaying={activePlayer === i}
            onPlayBtnClick={this._handlePlayBtnClick.bind(this, i)}
          />
          <div className="game__answer">
            <input
              className="game__input visually-hidden"
              type="checkbox"
              name="answer"
              value={`answer-${i}`}
              id={`answer-${i}`}
            />
            <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
          </div>
        </div>)}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {onAnswer} = this.props;
    onAnswer();
  }

  _handlePlayBtnClick(index) {
    this.setState({
      activePlayer: this.state.activePlayer === index ? -1 : index,
    });
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `pop`, `blues`]).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `pop`, `blues`]).isRequired,
    })).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
