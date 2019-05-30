import React from 'react';
import renderer from 'react-test-renderer';
import ArtistAnswer from './artist-answer.jsx';

const mock = {
  id: 1,
  picture: ``,
  artist: `correct-artist`
};

it(`ArtistAnswer correctly renders`, () => {
  const {
    id,
    picture,
    artist,
  } = mock;
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<ArtistAnswer
      id={id}
      picture={picture}
      artist={artist}
      onAnswer={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
