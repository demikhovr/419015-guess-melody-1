import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`WelcomeScreen correctly renders`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<WelcomeScreen
      time={0}
      errorCount={0}
      onClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
