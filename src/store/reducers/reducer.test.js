import reducer from './reducer';
import {
  INCREMENT_STEP,
  INCREMENT_MISTAKES,
} from '../actions/action-types';

it(`Reducer without additional parameters should return initial state`, () => {
  const state = undefined;
  const action = {};
  const expected = {
    step: -1,
    mistakes: 0,
  };

  expect(reducer(state, action)).toEqual(expected);
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

  const expected = {
    step: 0,
    mistakes: 0,
  };

  expect(reducer(state, action)).toEqual(expected);
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

  const firstExpected = {
    step: -1,
    mistakes: 1,
  };

  expect(reducer(state, firstAction)).toEqual(firstExpected);

  const secondAction = {
    type: INCREMENT_MISTAKES,
    payload: 0,
  };

  const secondExpected = {
    step: -1,
    mistakes: 0,
  };

  expect(reducer(state, secondAction)).toEqual(secondExpected);
});
