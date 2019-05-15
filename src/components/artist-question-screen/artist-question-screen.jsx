import React from 'react';
import PropTypes from 'prop-types';

const ArtistQuestionScreen = ({question, onAnswer}) => {
  const {
    song,
    answers,
  } = question;

  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <button className="track__button track__button--play" type="button" />
      <audio src={song.src} />
    </div>
    <form className="game__artist" onChange={onAnswer}>
      {answers.map((it, i) => <div className="artist" key={`answer-${it.artist}-${i}`}>
        <input
          className="artist__input visually-hidden"
          type="radio"
          name="answer"
          value={`answer-${i}`}
          id={`answer-${i}`}
        />
        <label className="artist__name" htmlFor={`answer-${i}`}>
          <img className="artist__picture" src={it.picture} alt={it.artist} />
          {it.artist}
        </label>
      </div>)}
    </form>
  </section>;
};

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
