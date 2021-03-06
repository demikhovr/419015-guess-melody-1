import {
  INCREMENT_STEP,
  INCREMENT_MISTAKES,
  RESET,
} from './action-types';

export const isArtistAnswerCorrect = (userAnswer, question) => userAnswer === question.song.artist;
export const isGenreAnswerCorrect = (userAnswer, question) => userAnswer
  .every((it, i) => it === (question.answers[i].genre === question.genre));

export default {
  incrementStep() {
    return {
      type: INCREMENT_STEP,
      payload: 1,
    };
  },
  updateMistakes(userAnswer, question, mistakes, maxMistakes) {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    if (!answerIsCorrect && mistakes + 1 >= maxMistakes) {
      return {
        type: RESET,
      };
    }

    return {
      type: INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
  reset() {
    return {
      type: RESET,
    };
  }
};
