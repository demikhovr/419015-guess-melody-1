import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions, {settings} from './mocks/questions';

const {gameTime, errorCount} = settings;

ReactDOM.render(
    <App
      gameTime={gameTime}
      errorCount={errorCount}
      questions={questions}
    />,
    document.querySelector(`.main`)
);
