import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const settings = {
  gameTime: 7,
  errorCount: 4,
};

const init = () => {
  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
        onWelcomeBtnClick={(evt) => evt.preventDefault()}
      />,
      document.querySelector(`.main`)
  );
};

init();
