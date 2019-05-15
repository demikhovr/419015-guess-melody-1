import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

it(`Header correctly renders`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<Header
      gameTime={7}
      errorCount={4}
      onClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
