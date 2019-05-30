import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import GenreAnswer from '../genre-answer/genre-answer.jsx';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    const {question} = this.props;
    const {answers} = question;

    this.state = {
      activePlayer: -1,
      userAnswers: new Array(answers.length).fill(false),
    };

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handlePlayBtnClick = this._handlePlayBtnClick.bind(this);
    this._handleAnswerChange = this._handleAnswerChange.bind(this);
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
        {answers.map((it, i) => <GenreAnswer
          key={`answer-${it.genre}-${i}`}
          id={i}
          src={it.src}
          activePlayer={activePlayer}
          onChange={this._handleAnswerChange}
          onPlayBtnClick={this._handlePlayBtnClick}
        />)}
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
    const userAnswers = [...this.state.userAnswers];
    userAnswers[i] = !userAnswers[i];
    this.setState({userAnswers});
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {userAnswers} = this.state;
    const {onAnswer} = this.props;
    onAnswer(userAnswers);
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
