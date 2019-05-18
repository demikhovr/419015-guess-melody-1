import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  },
  isPlaying: false,
};

window.HTMLMediaElement.prototype.pause = () => {};
window.HTMLMediaElement.prototype.play = () => {};

it(`Click on play button change playing state`, () => {
  const {
    song,
    isPlaying,
  } = mock;
  const clickHandler = jest.fn();
  const audioPlayer = mount(<AudioPlayer
    src={song.src}
    isPlaying={isPlaying}
    onPlayBtnClick={clickHandler}
  />);

  const playBtn = audioPlayer.find(`.track__button`);
  const clickEvent = new Event(`click`);
  audioPlayer.setState({
    isLoading: false,
  });
  playBtn.simulate(`click`, clickEvent);
  audioPlayer.update();
  expect(audioPlayer.state(`isPlaying`)).toEqual(true);
});

it(`Click on pause button change playing state`, () => {
  const {
    song,
    isPlaying,
  } = mock;
  const clickHandler = jest.fn();
  const audioPlayer = mount(<AudioPlayer
    src={song.src}
    isPlaying={isPlaying}
    onPlayBtnClick={clickHandler}
  />);

  const playBtn = audioPlayer.find(`.track__button`);
  const clickEvent = new Event(`click`);
  audioPlayer.setState({
    isLoading: false,
    isPlaying: true,
  });
  audioPlayer.update();
  playBtn.simulate(`click`, clickEvent);
  audioPlayer.update();
  expect(audioPlayer.state(`isPlaying`)).toEqual(false);
});
