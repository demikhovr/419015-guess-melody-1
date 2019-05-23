import {
  INCREMENT_STEP,
  INCREMENT_MISTAKES,
} from './action-types';

export const isArtistAnswerCorrect = (userAnswer, question) => userAnswer.artist === question.song.artist;
export const isGenreAnswerCorrect = (userAnswer, question) => userAnswer
  .every((it, i) => it === (question.answers[i].genre === question.genre));

export default {
  incrementStep() {
    return {
      type: INCREMENT_STEP,
      payload: 1,
    };
  },
  incrementMistake(userAnswer, question) {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    return {
      type: INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  }
};
