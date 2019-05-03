import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});
it(`Click on 'welcome__button' correctly works`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<WelcomeScreen
    time={0}
    errorCount={0}
    onClick={clickHandler}
  />);

  const startButton = app.find(`.welcome__button`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
