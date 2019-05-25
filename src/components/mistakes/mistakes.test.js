import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

const mock = {
  mistakes: 0,
};

it(`Mistakes correctly renders`, () => {
  const {mistakes} = mock;
  const tree = renderer
    .create(<Mistakes mistakes={mistakes} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
