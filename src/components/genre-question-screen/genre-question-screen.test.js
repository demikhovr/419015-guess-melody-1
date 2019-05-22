import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `test.mp3`,
        genre: `rock`,
      },
      {
        src: `test.mp3`,
        genre: `blues`,
      },
      {
        src: `test.mp3`,
        genre: `jazz`,
      },
      {
        src: `test.mp3`,
        genre: `rock`,
      },
    ],
  },
};


it(`GenreQuestionScreen correctly renders`, () => {
  const {question} = mock;
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<GenreQuestionScreen
      question={question}
      onAnswer={clickHandler}
    />, {
      createNodeMock: () => {
        return {
          src: ``,
          addEventListener: () => {},
          play: () => {},
          pause: () => {}
        };
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
