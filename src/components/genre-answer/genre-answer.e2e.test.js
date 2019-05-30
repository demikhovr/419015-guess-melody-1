import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreAnswer from './genre-answer.jsx';

configure({adapter: new Adapter()});

const mock = {
  activePlayer: -1,
  id: 1,
  src: ``,
};

it(`When user checks genre input, current index should pass to onAnswer callback`, () => {
  const {
    activePlayer,
    id,
    src,
  } = mock;
  const onChange = jest.fn();
  const onPlayBtnClick = jest.fn();
  const genreIAnswer = mount(<GenreAnswer
    id={id}
    src={src}
    activePlayer={activePlayer}
    onChange={onChange}
    onPlayBtnClick={onPlayBtnClick}
  />);

  const input = genreIAnswer.find(`input`);
  input.simulate(`change`);

  expect(onChange).toHaveBeenNthCalledWith(1, id);
});
