import {
  INCREMENT_STEP,
  INCREMENT_MISTAKES,
} from '../actions/action-types';

const initialState = {
  step: -1,
  mistakes: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STEP:
      return {
        ...state,
        step: state.step + action.payload,
      };
    case INCREMENT_MISTAKES:
      return {
        ...state,
        mistakes: state.mistakes + action.payload,
      };
    default:
      return state;
  }
};
