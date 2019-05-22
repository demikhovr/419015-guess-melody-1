import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/app/app.jsx';
import questions, {settings} from './mocks/questions';
import reducer from './store/reducer';

const store = createStore(reducer);

const {gameTime, errorCount} = settings;

ReactDOM.render(
    <App
      gameTime={gameTime}
      errorCount={errorCount}
      questions={questions}
    />,
    document.querySelector(`.main`)
);
