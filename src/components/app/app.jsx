import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../store/actions/action-creator';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import Header from '../header/header.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

class App extends PureComponent {
  render() {
    const {
      questions,
      step,
    } = this.props;

    return this._getScreen(questions[step]);
  }

  _getScreen(question) {
    const {
      gameTime,
      maxMistakes,
      step,
      mistakes,
      onWelcomeScreenClick,
      onBackBtnClick,
    } = this.props;

    if (step === -1 || !question) {
      return <WelcomeScreen
        time={gameTime}
        errorCount={maxMistakes}
        onClick={onWelcomeScreenClick}
      />;
    }

    const header = <Header
      gameTime={gameTime}
      mistakes={mistakes}
      onClick={onBackBtnClick}
    />;

    switch (question.type) {
      case `genre`: return <section className="game game--genre">
        {header}
        <GenreQuestionScreen
          key={`genre-screen-${step}`}
          question={question}
          onAnswer={this._onUserAnswer.bind(this, question)}
        />
      </section>;

      case `artist`: return <section className="game game--artist">
        {header}
        <ArtistQuestionScreen
          key={`artist-screen-${step}`}
          question={question}
          onAnswer={this._onUserAnswer.bind(this, question)}
        />
      </section>;

      default: return null;
    }
  }

  _onUserAnswer(question, userAnswer) {
    const {
      onUserAnswer,
      mistakes,
      maxMistakes,
    } = this.props;
    onUserAnswer(userAnswer, question, mistakes, maxMistakes);
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onBackBtnClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  ...props,
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),
  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question,
        mistakes,
        maxMistakes
    ));
  },
  onBackBtnClick: () => dispatch(ActionCreator.reset()),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
