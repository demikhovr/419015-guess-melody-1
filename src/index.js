import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import questions, {settings} from './mocks/questions';
import reducer from './store/reducers/reducer';

const store = createStore(reducer);

const {gameTime, errorCount} = settings;

ReactDOM.render(
    <Provider store={store}>
      <App
        gameTime={gameTime}
        maxMistakes={errorCount}
        questions={questions}
      />
    </Provider>,
    document.querySelector(`.main`)
);
