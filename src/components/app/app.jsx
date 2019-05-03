import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = ({gameTime, errorCount, onWelcomeBtnClick}) => <WelcomeScreen
  time={gameTime}
  errorCount={errorCount}
  onClick={onWelcomeBtnClick}
/>;

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onWelcomeBtnClick: PropTypes.func.isRequired,
};

export default App;
