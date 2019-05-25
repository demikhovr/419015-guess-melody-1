import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    const {question} = this.props;
    const {answers} = question;

    this.state = {
      activePlayer: null,
      userAnswer: new Array(answers.length).fill(false),
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
              onChange={this._handleAnswerChange.bind(this, i)}
            />
            <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
          </div>
        </div>)}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }

  _handlePlayBtnClick(index) {
    this.setState({
      activePlayer: this.state.activePlayer === index ? -1 : index,
    });
  }

  _handleAnswerChange(i) {
    const userAnswer = [...this.state.userAnswer];
    userAnswer[i] = !userAnswer[i];
    this.setState({userAnswer});
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {userAnswer} = this.state;
    const {onAnswer} = this.props;
    onAnswer(userAnswer);
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
