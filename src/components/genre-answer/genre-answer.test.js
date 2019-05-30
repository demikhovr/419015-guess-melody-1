import React from 'react';
import renderer from 'react-test-renderer';
import GenreAnswer from './genre-answer.jsx';

const mock = {
  activePlayer: -1,
  id: 1,
  src: ``,
};

it(`GenreAnswer correctly renders`, () => {
  const {
    activePlayer,
    id,
    src,
  } = mock;
  const onChange = jest.fn();
  const onPlayBtnClick = jest.fn();
  const tree = renderer
    .create(<GenreAnswer
      id={id}
      src={src}
      activePlayer={activePlayer}
      onChange={onChange}
      onPlayBtnClick={onPlayBtnClick}
    />, {
      createNodeMock: () => {
        return {
          src: ``,
          addEventListener: () => {},
          play: () => {},
          pause: () => {}
        };
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
