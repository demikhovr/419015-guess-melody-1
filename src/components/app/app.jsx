import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import Header from '../header/header.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };

    this._changeQuestion = this._changeQuestion.bind(this);
  }

  render() {
    const {question} = this.state;
    return this._getScreen(question, this.props, this._changeQuestion);
  }

  _getScreen(question, props, onClick) {
    const {
      gameTime,
      errorCount,
      questions,
    } = props;
    const currentQuestion = questions[question];

    if (question === -1 || !currentQuestion) {
      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onClick={onClick}
      />;
    }

    switch (currentQuestion.type) {
      case `genre`: return <section className="game game--genre">
        <Header
          gameTime={gameTime}
          errorCount={errorCount}
          onClick={this._handleBackBtnClick}
        />
        <GenreQuestionScreen
          question={currentQuestion}
          onAnswer={onClick}
        />
      </section>;

      case `artist`: return <section className="game game--artist">
        <Header
          gameTime={gameTime}
          errorCount={errorCount}
          onClick={this._handleBackBtnClick}
        />
        <ArtistQuestionScreen
          question={currentQuestion}
          onAnswer={onClick}
        />
      </section>;

      default: return null;
    }
  }

  _changeQuestion() {
    const {question} = this.state;

    this.setState({
      question: question + 1 >= question.length
        ? -1
        : question + 1,
    });
  }

  _handleBackBtnClick(evt) {
    evt.preventDefault();
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
