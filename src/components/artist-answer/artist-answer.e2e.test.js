import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistAnswer from './artist-answer.jsx';

configure({adapter: new Adapter()});

const mock = {
  id: 1,
  picture: ``,
  artist: `correct-artist`
};

it(`When user clicks on artist input, current artist should pass to onAnswer callback`, () => {
  const {
    id,
    picture,
    artist,
  } = mock;
  const onAnswer = jest.fn();
  const artistAnswer = mount(<ArtistAnswer
    id={id}
    picture={picture}
    artist={artist}
    onAnswer={onAnswer}
  />);

  const input = artistAnswer.find(`input`);
  input.simulate(`click`);

  expect(onAnswer).toHaveBeenNthCalledWith(1, artist);
});
