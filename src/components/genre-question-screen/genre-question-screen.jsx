import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionScreen = ({question, onAnswer}) => {
  const {
    genre,
    answers,
  } = question;

  return <section className="game__screen">
    <h2 className="game__title">Выберите {genre} треки</h2>
    <form className="game__tracks" onSubmit={(evt) => {
      evt.preventDefault();
      onAnswer();
    }}>
      {answers.map((it, i) => <div className="track" key={`answer-${it.genre}-${i}`}>
        <button className="track__button track__button--play" type="button" />
        <div className="track__status">
          <audio src={it.src} />
        </div>
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
};

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
