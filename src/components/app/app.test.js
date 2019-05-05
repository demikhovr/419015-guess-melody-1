import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App correctly renders`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<App
      gameTime={0}
      errorCount={0}
      onWelcomeBtnClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
