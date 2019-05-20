import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  },
  isPlaying: false,
};

it(`AudioPlayer correctly renders`, () => {
  const {
    song,
    isPlaying,
  } = mock;
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<AudioPlayer
      src={song.src}
      isPlaying={isPlaying}
      onPlayBtnClick={clickHandler}
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
