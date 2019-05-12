import React from 'react';
import PropTypes from 'prop-types';

const Header = ({gameTime, errorCount, onClick}) => <header className="game__header">
  <a className="game__back" href="#" onClick={onClick}>
    <span className="visually-hidden">Сыграть ещё раз</span>
    <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
  </a>
  <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
    <circle className="timer__line" cx="390" cy="390" r="370"
      style={{
        filter: `url(#blur)`,
        transform: `rotate(-90deg) scaleY(-1)`,
        transformOrigin: `center`,
      }}
    />
  </svg>
  <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
    <span className="timer__mins">{gameTime}</span>
    <span className="timer__dots">:</span>
    <span className="timer__secs">00</span>
  </div>
  <div className="game__mistakes">
    {[...new Array(errorCount)].map((it, i) => <div className="wrong" key={`life-${i}`} />)}
  </div>
</header>;

Header.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;