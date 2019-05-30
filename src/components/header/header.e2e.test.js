import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on '.game__back' button correctly works`, () => {
  const clickHandler = jest.fn();
  const header = shallow(<Header
    gameTime={7}
    mistakes={4}
    onClick={clickHandler}
  />);

  const backBtn = header.find(`.game__back`);
  backBtn.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
