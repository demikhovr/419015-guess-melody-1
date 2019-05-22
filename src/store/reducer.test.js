import reducer from './reducer';
import {
  INCREMENT_STEP,
  INCREMENT_MISTAKES,
} from './actionTypes';

it(`Reducer without additional parameters should return initial state`, () => {
  const state = undefined;
  const action = {};
  const expectation = {
    step: -1,
    mistakes: 0,
  };

  expect(reducer(state, action)).toEqual(expectation);
});

it(`Reducer should increment current step by a given value`, () => {
  const state = {
    step: -1,
    mistakes: 0,
  };

  const action = {
    type: INCREMENT_STEP,
    payload: 1,
  };

  const expectation = {
    step: 0,
    mistakes: 0,
  };

  expect(reducer(state, action)).toEqual(expectation);
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  const state = {
    step: -1,
    mistakes: 0,
  };

  const firstAction = {
    type: INCREMENT_MISTAKES,
    payload: 1,
  };

  const firstExpectation = {
    step: -1,
    mistakes: 1,
  };

  expect(reducer(state, firstAction)).toEqual(firstExpectation);

  const secondAction = {
    type: INCREMENT_MISTAKES,
    payload: 0,
  };

  const secondExpectation = {
    step: -1,
    mistakes: 0,
  };

  expect(reducer(state, secondAction)).toEqual(secondExpectation);
});
