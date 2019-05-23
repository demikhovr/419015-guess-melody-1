import ActionCreator, {
  isArtistAnswerCorrect,
  isGenreAnswerCorrect,
} from './action-creator';
import {
  INCREMENT_STEP,
  INCREMENT_MISTAKES,
} from './action-types';

describe(`Business logic is correct`, () => {
  it(`Artist answer is checked correctly`, () => {
    const correctUserAnswer = {
      artist: `correct-artist`,
      picture: `correct-pic`,
    };

    const incorrectUserAnswer = {
      artist: `incorrect-artist`,
      picture: `incorrect-pic`,
    };

    const question = {
      type: `artist`,
      song: {
        artist: `correct-artist`,
        src: ``,
      },
      answers: [
        {
          artist: `incorrect-artist`,
          picture: `incorrect-pic`,
        },
        {
          artist: `correct-artist`,
          picture: `correct-pic`,
        },
        {
          artist: `incorrect-artist`,
          picture: `incorrect-pic`,
        },
      ],
    };

    expect(isArtistAnswerCorrect(correctUserAnswer, question)).toBe(true);
    expect(isArtistAnswerCorrect(incorrectUserAnswer, question)).toBe(false);
  });

  it(`Genre question is checked correctly`, () => {
    const correctUserAnswer = [false, true, true, false];
    const incorrectUserAnswer = [false, false, false, false];
    const question = {
      type: `genre`,
      genre: `correct-genre`,
      answers: [
        {
          src: ``,
          genre: `incorrect-genre`,
        },
        {
          src: ``,
          genre: `correct-genre`,
        },
        {
          src: ``,
          genre: `correct-genre`,
        },
        {
          src: ``,
          genre: `incorrect-genre`,
        },
      ],
    };

    expect(isGenreAnswerCorrect(correctUserAnswer, question)).toBe(true);
    expect(isGenreAnswerCorrect(incorrectUserAnswer, question)).toBe(false);
  });
});

describe(`Action creators works correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    const expected = {
      type: INCREMENT_STEP,
      payload: 1,
    };

    expect(ActionCreator.incrementStep()).toEqual(expected);
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    const userAnswer = {
      artist: `correct-artist`,
      picture: `correct-pic`,
    };

    const question = {
      type: `artist`,
      song: {
        artist: `correct-artist`,
        src: ``,
      },
      answers: [
        {
          picture: `incorrect-pic`,
          artist: `incorrect-artist`,
        },
        {
          picture: `incorrect-pic`,
          artist: `incorrect-artist`,
        },
        {
          picture: `correct-pic`,
          artist: `correct-artist`,
        },
      ],
    };

    const expected = {
      type: INCREMENT_MISTAKES,
      payload: 0,
    };

    expect(ActionCreator.incrementMistake(userAnswer, question)).toEqual(expected);
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    const userAnswer = {
      artist: `incorrect-artist`,
      picture: `incorrect-pic`,
    };

    const question = {
      type: `artist`,
      song: {
        artist: `correct-artist`,
        src: ``,
      },
      answers: [
        {
          picture: `incorrect-pic`,
          artist: `incorrect-artist`,
        },
        {
          picture: `incorrect-pic`,
          artist: `incorrect-artist`,
        },
        {
          picture: `correct`,
          artist: `correct-artist`,
        },
      ],
    };

    const expected = {
      type: INCREMENT_MISTAKES,
      payload: 1,
    };

    expect(ActionCreator.incrementMistake(userAnswer, question)).toEqual(expected);
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    const userAnswer = [false, true, true, false];
    const question = {
      type: `genre`,
      genre: `correct-genre`,
      answers: [
        {
          src: ``,
          genre: `incorrect-genre`,
        },
        {
          src: ``,
          genre: `correct-genre`,
        },
        {
          src: ``,
          genre: `correct-genre`,
        },
        {
          src: ``,
          genre: `incorrect-genre`,
        },
      ],
    };

    const expected = {
      type: INCREMENT_MISTAKES,
      payload: 0,
    };

    expect(ActionCreator.incrementMistake(userAnswer, question)).toEqual(expected);
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    const userAnswer = [false, true, true, false];
    const question = {
      type: `genre`,
      genre: `correct-genre`,
      answers: [
        {
          src: ``,
          genre: `incorrect-genre`,
        },
        {
          src: ``,
          genre: `incorrect-genre`,
        },
        {
          src: ``,
          genre: `correct-genre`,
        },
        {
          src: ``,
          genre: `incorrect-genre`,
        },
      ],
    };

    const expected = {
      type: INCREMENT_MISTAKES,
      payload: 1,
    };
    expect(ActionCreator.incrementMistake(userAnswer, question)).toEqual(expected);
  });
});